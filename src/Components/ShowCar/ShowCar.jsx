import { Link } from "react-router-dom";

import ReactStars from "react-rating-stars-component";
import Rating from "react-rating";
const ShowCar = ({ car }) => {
    const { _id, name, price, image, brand, type, rating } = car;
    // const roundedRating = Math.round(rating * 2) / 2;
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="w-full md:h-[250px] h-[200px]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex justify-between items-center gap-5">
                        <div>
                            <h4 className="text-xl">Brand : {brand}</h4>
                            <p className="text-xl">Type : {type}</p>
                        </div>
                        <div>
                            <p className="text-xl">Price: ${price}</p>
                            <div>
                                <Rating
                                    placeholderRating={3.5}
                                    emptySymbol={<img src="assets/images/star-grey.png" className="icon" />}
                                    placeholderSymbol={<img src="assets/images/star-red.png" className="icon" />}
                                    fullSymbol={<img src="assets/images/star-yellow.png" className="icon" />}
                                />
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