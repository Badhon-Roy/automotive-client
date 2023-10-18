import { Link } from "react-router-dom";



const ShowCar = ({ car }) => {
    const { _id, name, price, image, brand, type, rating } = car;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="w-full md:h-[250px] h-[200[px]]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex justify-between items-center gap-5">
                        <div>
                            <h4 className="text-xl">Brand : {brand}</h4>
                            <p className="text-xl">Type : {type}</p>
                        </div>
                        <div>
                            <p className="text-xl">Price : ${price}</p>
                            <p className="text-xl"> Rating : {rating}</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="card-actions justify-end">
                            <Link to={`/showCar/${_id}`}>
                                <button className="btn btn-primary">Details</button>
                            </Link>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCar;