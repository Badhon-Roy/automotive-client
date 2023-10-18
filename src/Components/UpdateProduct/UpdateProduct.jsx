import { useLoaderData } from "react-router-dom";


const UpdateProduct = () => {
    const car = useLoaderData()
    const { name, price, image, brand, type, rating, description } = car;

    return (
        <div className="bg-purple-300 md:p-16 p-6 mt-2">
            <h2 className="text-4xl font-bold text-center mb-8">Update Product : {name} </h2>
            <div>
                <div className="md:flex justify-between gap-8 mb-8">
                    <div className="flex-1">
                        <label htmlFor="" className="text-xl">Name :</label>
                        <input type="text" name="name" className="w-full mt-2 py-1 px-4 rounded" placeholder="name" defaultValue={name} id="" />
                    </div>
                    <div className="flex-1 md:mt-0 mt-4">
                        <label htmlFor="" className="text-xl">Brand :</label>
                        <input type="text" name="brand" className="w-full mt-2 lowercase py-1 px-4 rounded" placeholder="brand" defaultValue={brand} id="" />
                    </div>
                </div>
                <div className="md:flex justify-between gap-8 mb-8">
                    <div className="flex-1">
                        <label htmlFor="" className="text-xl">Type :</label>
                        <input type="text" name="type" className="w-full mt-2 py-1 px-4 rounded" placeholder="type" defaultValue={type} id="" />
                    </div>
                    <div className="flex-1 md:mt-0 mt-4">
                        <label htmlFor="" className="text-xl">Price :</label>
                        <input type="text" name="price" className="w-full mt-2 py-1 px-4 rounded" placeholder="price" defaultValue={price} id="" />
                    </div>
                </div>
                <div className="md:flex justify-between gap-8 mb-8">
                    <div className="flex-1">
                        <label htmlFor="" className="text-xl">Rating :</label>
                        <input type="text" name="rating" className="w-full mt-2 py-1 px-4 rounded" placeholder="rating" defaultValue={rating} id="" />
                    </div>
                    <div className="flex-1 md:mt-0 mt-4">
                        <label htmlFor="" className="text-xl">Description :</label>
                        <input type="text" name="description" className="w-full mt-2 py-1 px-4 rounded" placeholder="description" defaultValue={description} id="" />
                    </div>
                </div>
                <div className="md:mt-0 mt-4">
                    <label htmlFor="" className="text-xl">Image URL :</label>
                    <input type="text" name="image" className="w-full mt-2 py-1 px-4 rounded" placeholder="image" defaultValue={image} id="" />
                </div>
                <div className="flex justify-center"> 
                    <button className="btn bg-purple-500 hover:bg-purple-600 my-5">
                        Update Product
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;