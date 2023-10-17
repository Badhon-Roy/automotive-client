import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="bg-gray-500">
            <div className="navbar text-xl font-medium max-w-[1600px] mx-auto lg:px-16 md:px-8 px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-blue-500 px-3 py-1 rounded" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/addProduct"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-blue-500 px-3 py-1 rounded" : ""
                                    }
                                >
                                    Add Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/myCart"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-blue-500 px-3 py-1 rounded" : ""
                                    }
                                >
                                    My Cart
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <img className="w-2/5" src="https://quattro.true-emotions.studio/wp-content/themes/quattro/images/logo.svg" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" gap-10 menu-horizontal px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-blue-500 px-3 py-1 rounded" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/addProduct"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-blue-500 px-3 py-1 rounded" : ""
                                }
                            >
                                Add Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/myCart"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-blue-500 px-3 py-1 rounded" : ""
                                }
                            >
                                My Cart
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul>
                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-blue-500 px-3 py-1 rounded" : ""
                                }
                            >
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;