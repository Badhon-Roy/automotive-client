import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowCar from "../ShowCar/ShowCar";
import ProductAdvertisement from "../ProductAdvertisement/ProductAdvertisement";


const ShowCars = () => {
    const [cars, setCars] = useState([])
    const { brand } = useParams()
    useEffect(() => {
        fetch(`https://automotive-server-ol1p5cz1y-badhon-roys-projects.vercel.app/brands?brand=${encodeURIComponent(brand)}`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [brand])


    return (
        <div>
            <div>
                <ProductAdvertisement></ProductAdvertisement>
            </div>

            <h3 className="text-4xl mt-16 mb-8 text-center my-6 font-bold">ToTal Cars : {cars.length}</h3>
            <div className="md:px-0 px-4">
                {
                    cars.length > 0 ? <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                        {
                            cars.map(car => <ShowCar key={car._id} car={car} ></ShowCar>)
                        }
                    </div> : <p className="text-center my-16 text-4xl font-bold">There are currently no cars </p>
                }
            </div>
        </div>
    );
};

export default ShowCars;