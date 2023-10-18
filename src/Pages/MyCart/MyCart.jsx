import { useEffect, useState } from "react";




const MyCart = () => {
    const [myCarts , setMyCarts] = useState([])
    const email = 'roydfas@gmail.com'
    useEffect(()=>{
        fetch('http://localhost:5000/myCarts')
        .then(res => res.json())
        .then(data => {
            setMyCarts(data);
        })
    },[])
    const filterCarts = myCarts.filter(cart => cart.email === email)
    
    return (
        <div>
            <h2>My Carts : {filterCarts.length}</h2>
        </div>
    );
};

export default MyCart;