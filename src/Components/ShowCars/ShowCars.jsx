import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowCar from "../ShowCar/ShowCar";


const ShowCars = () => {
    const [cars, setCars] = useState([])
    console.log(cars);
    const { brand } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/brands?brand=${encodeURIComponent(brand)}`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [brand])


    return (
        <div>
            <h3 className="text-6xl text-center my-6 font-bold">ToTal Cars : {cars.length}</h3>
            {
                cars.length>0 ? <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                {
                    cars.map(car => <ShowCar key={car._id} car={car} ></ShowCar>)
                }
            </div> : <p className="text-center my-16 text-4xl font-bold">There are currently no cars </p>
            }
        </div>
    );
};

export default ShowCars;