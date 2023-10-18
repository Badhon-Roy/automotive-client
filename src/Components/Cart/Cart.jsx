import { useEffect, useState } from "react";

const Cart = ({ cart }) => {

    const carId = cart ? cart.carId : null;
    const [myCart, setMyCart] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Add a loading state
    const [error, setError] = useState(null); // Add an error state

    useEffect(() => {
        fetch('http://localhost:5000/allCars')
            .then((res) => res.json())
            .then((data) => {
                setMyCart(data);
                setIsLoading(false); // Set loading to false when data is fetched
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false); // Set loading to false on error
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    const filterMyCarts = myCart.filter((cartItem) => cartItem._id === carId);
    const { _id, name, price, image, brand, type, description, rating } = filterMyCarts[0]

    if (filterMyCarts.length === 0) {
        return <div>No items found for the given carId.</div>;
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Cart;