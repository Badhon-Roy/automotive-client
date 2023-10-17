import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ShowCars = () => {
    const [cars, setCars] = useState([])
    const {brand} = useParams() 
    useEffect(() => {
        // fetch('http://localhost:5000/brands')
        fetch(`http://localhost:5000/brands?brand=${encodeURIComponent(brand)}`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [brand])
    
    return (
        <div>
            <h3 className="text-6xl text-center my-6 font-bold">ToTal Cars : {cars.length}</h3>
        </div>
    );
};

export default ShowCars;