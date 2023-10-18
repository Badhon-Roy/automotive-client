import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import swal from "sweetalert";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        swal({
            title: "Are you sure you want to log out?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                logOut()
                .then(() => {
                    swal("Log Out", "successful", "success")
                })
                .catch(error => {
                    console.log(error);
                })
            }
          });
    }
    return (
        <div className="bg-gray-500">
            <div className="navbar text-xl font-medium max-w-[1600px] mx-auto lg:px-16 md:px-8 px-4">
                <div className="navbar-start pl-5">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="space-y-2 menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="bg-gray-300 rounded">
                                <NavLink
                                    to="/"
                                    style={{width : '100%', display : 'block' ,paddingLeft : '10px'}}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-blue-500 px-3 py-1 rounded" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="bg-gray-300 rounded">
                                <NavLink
                                    to="/addProduct"
                                    style={{width : '100%', display : 'block' ,paddingLeft : '10px'}}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-blue-500 px-3 py-1 rounded" : ""
                                    }
                                >
                                    Add Product
                                </NavLink>
                            </li>
                            <li className="bg-gray-300 rounded">
                                <NavLink
                                    to="/myCart"
                                    style={{width : '100%', display : 'block' ,paddingLeft : '10px'}}
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
                <div className="navbar-end pr-5">
                <ul className="text-xl flex items-center font-bold">
                        {
                            user ? <div className="dropdown dropdown-end">
                                <label tabIndex={0} >
                                    <div className="avatar cursor-pointer">
                                        <div className="w-11 rounded-full ring ring-blue-500 ring-offset-base-100 ring-offset-2">
                                            {
                                                user?.photoURL ?
                                                    <img src={user.photoURL} /> :
                                                    <img className="bg-blue-500 text-white" />
                                            }
                                        </div>
                                    </div>
                                </label>
                                <ul tabIndex={0} className="dropdown-content z-[2] menu p-3 shadow space-y-2 min-w-[150px] bg-base-100 rounded-box px-4">
                                    <li>{user.displayName}</li>
                                    <li >{user.email}</li>
                                    <hr />
                                    <button onClick={handleSignOut} className="text-xl border-black border-2 p-1 rounded-lg text-left">Log out</button>
                                </ul>
                            </div> :
                                <li><NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-blue-500 text-white rounded px-4 py-2" : ""
                                    }
                                >
                                    Login
                                </NavLink></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;