import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CarDetails = () => {
    const {id} = useParams()
    const [cars, setCars] = useState({})
    const { name, price, image , brand , type ,description, rating} = cars;
    useEffect(() => {
        fetch(`http://localhost:5000/showCar/${id}`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [id])
    
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
                <button className="btn bg-blue-500 hover:bg-blue-700">Add to Cart</button>
            </div>
        </div>
    );
};

export default CarDetails;