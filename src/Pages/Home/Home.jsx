import Banner from "../../Components/Banner/Banner";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className="text-center text-4xl mt-16 mb-8">Popular Brand</h2>
                <div className="grid md:grid-cols-3 gap-5">
                    <Link to={`showCars/toyota`}>
                        <div className="bg-base-100 shadow-xl">
                            <figure><img className="w-full h-[250px]" src="https://content.presspage.com/uploads/1523/1920_bvi-16x9-kv.jpg?10000" alt="" /></figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-bold">Toyota</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to={`showCars/bmw`}>
                        <div className="bg-base-100 shadow-xl">
                            <figure><img className="w-full h-[250px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTCElyUttT1wlq1-ZyQwuEVUyypIFeXtyKLIEJ9GdtK0YWz1Un4fv7ekokKKzbkCm_n3w&usqp=CAU" alt="" /></figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-bold">BMW</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to={`showCars/tesla`}>
                        <div className="bg-base-100 shadow-xl">
                            <figure><img className="w-full h-[250px]" src="https://siteimages.simplified.com/blog/tesla-branding-strategy.jpg?auto=compress&fm=pjpg" alt="" /></figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-bold">Tesla</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to={`showCars/ford`}>
                        <div className="bg-base-100 shadow-xl">
                            <figure><img className="w-full h-[250px]" src="https://thebrandhopper.com/wp-content/uploads/2023/07/Ford-success-story.jpg" alt="" /></figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-bold">Ford</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to={`showCars/honda`}>
                        <div className="bg-base-100 shadow-xl">
                            <figure><img className="w-full h-[250px]" src="https://images.drive.com.au/caradvice/image/private/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cppdyfnhmsjwow26sgfg" alt="" /></figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-bold">Honda</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to={`showCars/mercedes`}>
                        <div className="bg-base-100 shadow-xl">
                            <figure><img className="w-full h-[250px]" src="https://miro.medium.com/v2/resize:fit:1400/1*rdiOXscdoN6KXc6Nf9YypQ.jpeg" alt="" /></figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-bold">Mercedes-Benz</h2>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;