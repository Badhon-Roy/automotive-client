import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";
import Swal from "sweetalert2";

const CarDetails = () => {
    const {user} =  useContext(AuthContext)
    const {id} = useParams()
    const [cars, setCars] = useState({})
    const {_id , name, price, image , brand , type ,description, rating} = cars;
    useEffect(() => {
        fetch(`https://automotive-server-pi.vercel.app/showCar/${id}`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [id])
    const handleAddCart = id =>{
        const cartsData = {email:user.email , carId : id}
        fetch(`https://automotive-server-pi.vercel.app/myCarts`,{
            method : "POST",
            headers : {
                'Content-Type' : "application/json"
            },
            body : JSON.stringify(cartsData)

        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Added cart successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            console.log(data);
        })
    }
    return (
        <div>
            <img className="w-full md:h-[70vh] mt-2" src={image} alt="" />
            <h2 className="text-4xl font-bold my-4">{name}</h2>
            <p className="text-2xl">Brand : <span className="text-blue-500">{brand}</span></p>
            <p className="text-xl">Type : {type}</p>
            <p className="text-xl">Price : ${price}</p>
            <p> Rating : {rating}</p>
            <p className="text-[18px] my-4">{description}</p>
            <div className="flex justify-end">
                <button onClick={()=>handleAddCart(_id)} className="btn bg-blue-500 text-white hover:bg-blue-700">Add to Cart</button>
            </div>
        </div>
    );
};

export default CarDetails;