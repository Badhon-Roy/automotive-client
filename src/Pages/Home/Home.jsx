import Banner from "../../Components/Banner/Banner";
import { Link } from "react-router-dom";
import { TfiHeadphoneAlt } from "react-icons/tfi"
import About from "./About";
import Testimonial from "./Testimonial";
import { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';


const Home = () => {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        fetch('https://automotive-server-pi.vercel.app/allBrands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);

    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 data-aos="fade-right" className="text-center md:text-4xl text-2xl mt-16 mb-8 font-bold">Popular <span className="text-blue-600">Brand</span></h2>
                <div className="grid md:grid-cols-3 gap-5 mb-16 px-4">
                    {
                        brands.map(brand => <Link key={brand._id} to={`showCars/${brand?.brand}`}>
                            <div data-aos="zoom-in" className="bg-blue-300 shadow-2xl">
                                <figure><img className="w-full h-[250px]" src={brand.image} alt="" /></figure>
                                <div className="card-body">
                                    <h2 className="md:text-2xl text-xl font-bold uppercase">{brand.brand}</h2>
                                </div>
                            </div>
                        </Link>)
                    }
                </div>
            </div>
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <About></About>
            </div>
            <Testimonial></Testimonial>
            <div data-aos="zoom-in" className="bg-blue-400 mx-4 md:mx-0 p-10 mt-16 md:flex gap-8 justify-between items-center rounded-md">
                <div className="md:w-3/4  md:border-r-2 border-white ">
                    <h2 className="md:text-3xl text-2xl font-bold">Get Your Dream Car It is Simple And Affordable</h2>
                    <p className="text-xl my-4">This powerful statement encapsulates the idea that achieving the dream of owning your ideal car is not only possible but also straightforward and budget-friendly. It appeals to individuals who aspire to own their dream cars without the process being complicated or financially burdensome.</p>
                </div>
                <div className="md:w-1/4">
                    <h3 className="flex items-center md:text-3xl text-2xl font-bold gap-4"><TfiHeadphoneAlt></TfiHeadphoneAlt> +2 123 854 7898</h3>
                    <div className="text-end mr-4" >
                        <button className="btn bg-blue-700 hover:bg-blue-800 text-white my-4">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;