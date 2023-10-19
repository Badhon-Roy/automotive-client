import Banner from "../../Components/Banner/Banner";
import { Link } from "react-router-dom";
import About from "./About";
import Testimonial from "./Testimonial";
import { useEffect, useState } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Home = () => {
    const [brands , setBrands] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allBrands')
        .then(res => res.json())
        .then(data => setBrands(data))
    },[])
    // useEffect(() => {
    //     AOS.init({
    //       duration: 1000, // Animation duration in milliseconds
    //       once: true, // Only animate the element once per scroll
    //     }),[]);


    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className="text-center text-4xl mt-16 mb-8 font-bold">Popular <span className="text-blue-600">Brand</span></h2>
                <div className="grid md:grid-cols-3 gap-5 mb-16">
                    {
                        brands.map(brand => <Link key={brand._id} to={`showCars/${brand?.brand}`}>
                        <div className="bg-base-100 shadow-2xl">
                            <figure><img className="w-full h-[250px]" src={brand.image} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-bold uppercase">{brand.brand}</h2>
                            </div>
                        </div>
                    </Link>)
                    }
                </div>
            </div>
            <About></About>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;