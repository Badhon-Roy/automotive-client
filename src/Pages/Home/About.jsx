import { BiSolidCar } from 'react-icons/bi';

const About = () => {
    return (
        <div className="md:flex justify-between items-center my-16 px-4">
            <div className="flex-1">
                <img src="https://live.themewild.com/motex/assets/img/about/01.png" alt="" />
            </div>
            <div className="flex-1">
                <p className='flex gap-2 items-center text-xl text-blue-600'><BiSolidCar></BiSolidCar> About us</p>
                <h2 className="md:text-4xl text-2xl font-bold my-4">World Largest <span className="text-blue-600">Car</span> Marketplace.</h2>
                <p className='my-4'>Welcome to the World Largest Car Marketplace, where automotive dreams come to life. Discover a vast selection of vehicles, from sleek sedans to powerful SUVs and high-performance sports cars. Whether you are buying, selling, or just exploring, we are your one-stop destination for all things automotive. Find your perfect ride or connect with a global community of car enthusiasts. Your automotive journey begins here.</p>
                <button className='btn bg-blue-500 hover:bg-blue-600 text-white'>Learn more</button>
            </div>
        </div>
    );
};

export default About;