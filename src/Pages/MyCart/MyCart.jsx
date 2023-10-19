import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Cart from "../../Components/Cart/Cart";




const MyCart = () => {
    const { user } = useContext(AuthContext)
    const [myCarts, setMyCarts] = useState([])
    const email = user.email
    useEffect(() => {
        fetch('https://automotive-server-production.up.railway.app/myCarts')
            .then(res => res.json())
            .then(data => {
                setMyCarts(data);
            })
    }, [myCarts])
    const filterCarts = myCarts.filter(cart => cart.email === email)

    return (
        <div className="md:px-0 px-4">
            <h2 className="text-center text-4xl mt-16 mb-8 font-bold">My Carts : {filterCarts.length}</h2>
            {
                filterCarts.length>0 ? <div>
                {
                    filterCarts.map(cart => <Cart key={cart._id} cart={cart} ></Cart>)
                }
            </div> : <p className="text-4xl text-center my-16">no cart added</p>
            }
        </div>
    );
};

export default MyCart;