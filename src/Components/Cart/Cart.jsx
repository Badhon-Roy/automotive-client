import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Cart = ({ cart }) => {
    const mainId = cart._id;
    const carId = cart ? cart.carId : null;
    const [myCart, setMyCart] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/allCars')
            .then((res) => res.json())
            .then((data) => {
                setMyCart(data);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    const filterMyCarts = myCart.filter((cartItem) => cartItem._id === carId);
    const { name, price, image, brand, type, description, rating } = filterMyCarts[0];

    if (filterMyCarts.length === 0) {
        return <div>No items found for the given carId.</div>;
    }
   
    const handleDelete = id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myCarts/${id}`,{
                    method : "DELETE"
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.deletedCount>0){
                        Swal.fire(
                            'Deleted!',
                            'Your cart has been deleted.',
                            'success'
                          )
                    }
                    console.log(data);
                })
            }
          })
        
    }
    return (

        <div>

            <a href="#" className="flex mb-5 flex-col items-center bg-gray-500 border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-600">
                <img className="object-cover w-full flex-1 rounded-t-lg h-96 md:h-[350px] md:w-2/5 md:rounded-none md:rounded-l-lg" src={image} alt="" />
                <div className="flex text-white flex-1 flex-col justify-between p-4 leading-normal">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <div className="flex justify-between gap-4 px-8">
                        <div>
                            <p className="text-xl">Brand : {brand}</p>
                            <p className="text-xl">Type : {type}</p>
                        </div>
                        <div>
                            <p className="text-xl">Price : ${price}</p>
                            <p> Rating : {rating}</p>
                        </div>
                    </div>
                    <p className="my-2">{description}</p>
                    <div className="flex justify-end pr-5">
                        <button onClick={()=>handleDelete(mainId)} className="btn bg-blue-500 hover:bg-blue-700">Delete Cart</button>
                    </div>
                </div>
            </a>

        </div>
    );
};
export default Cart;