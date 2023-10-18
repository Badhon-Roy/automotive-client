import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Cart from "../../Components/Cart/Cart";




const MyCart = () => {
    const { user } = useContext(AuthContext)
    const [myCarts, setMyCarts] = useState([])
    const email = user.email
    useEffect(() => {
        fetch('http://localhost:5000/myCarts')
            .then(res => res.json())
            .then(data => {
                setMyCarts(data);
            })
    }, [])
    const filterCarts = myCarts.filter(cart => cart.email === email)

    return (
        <div>
            <h2>My Carts : {filterCarts.length}</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    filterCarts.map(cart => <Cart key={cart._id} cart={cart} ></Cart>)
                }
            </div>
        </div>
    );
};

export default MyCart;