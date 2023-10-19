import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa"
import "./ShowCar.css"
const ShowCar = ({ car }) => {
    const { _id, name, price, image, brand, type, rating } = car;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl md:px-0">
                <figure><img className="w-full md:h-[250px] h-[200px]" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex justify-between items-center gap-5">
                        <div>
                            <h4 className="text-xl">Brand : {brand}</h4>
                            <p className="text-xl">Type : {type}</p>
                        </div>
                        <div className="mb-3">
                            <p className="text-xl">Price: ${price}</p>
                            <div className="flex">
                               
                                {Array.from({ length: 5 }, (_, i) => {
                                    const starValue = i + 1;
                                    return (
                                        <span
                                            key={starValue}
                                            className={`star ${starValue <= rating ? 'active' : ''}`}
                                        >
                                            <FaStar></FaStar>
                                        </span>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-between">
                        <div className="card-actions justify-end">
                            <Link to={`/showCar/${_id}`}>
                                <button className="btn btn-primary">Details</button>
                            </Link>
                        </div>
                        <div className="card-actions justify-end">
                            <Link to={`/updateProduct/${_id}`}>
                                <button className="btn btn-primary">Update</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCar;