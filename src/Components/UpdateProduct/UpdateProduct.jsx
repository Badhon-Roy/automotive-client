import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const car = useLoaderData()
    const { _id, name, price, image, brand, type, rating, description } = car;
    const handleUpdateProduct = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const image = form.image.value;
        const cars = { name, brand, type, price, rating, description, image }
        console.log(cars);
        fetch(`https://automotive-server-pi.vercel.app/allCars/${_id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cars)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Update product successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                }
            })
    }

    return (
        <div className="bg-purple-300 md:p-16 p-6 mt-2">
            <h2 className="text-4xl font-bold text-center mb-8">Update Product : {name} </h2>
            <form onSubmit={handleUpdateProduct}>
                <div className="md:flex justify-between gap-8 mb-8">
                    <div className="flex-1">
                        <label htmlFor="" className="text-xl">Name :</label>
                        <input type="text" name="name" className="w-full mt-2 py-1 px-4 rounded" placeholder="name" defaultValue={name} id="" />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="" className="text-xl">Brand :</label>
                        <select name="brand" type="text" className="w-full mt-2 py-1 px-4 rounded" >
                            <option defaultValue={brand}>{brand}</option>
                            <option value="toyota">toyota</option>
                            <option value="bmw">bmw</option>
                            <option value="tesla">tesla</option>
                            <option value="ford">ford</option>
                            <option value="honda">honda</option>
                            <option value="mercedes">mercedes</option>
                        </select>
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
                    <button className="btn text-white bg-purple-500 hover:bg-purple-600 my-5">
                        Update Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;