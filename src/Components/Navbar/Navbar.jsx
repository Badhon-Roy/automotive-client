import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import "./Navbar.css"


const Navbar = () => {
    const [theme ,setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : 'light'
    )
    const handleToggle = e =>{
        if(e.target.checked){
            setTheme("dark")
        }
        else{
            setTheme("light")
        }
    }
    useEffect(()=>{
        localStorage.setItem("theme" , theme)
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme" , localTheme)
    },[theme])



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
            <div className="navbar text-xl font-medium max-w-[1600px] mx-auto lg:px-16 md:px-8">
                <div className="navbar-start pl-2">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="space-y-2 menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="bg-gray-300 rounded">
                                <NavLink
                                    to="/"
                                    style={{ width: '100%', display: 'block', paddingLeft: '10px' }}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-blue-600 px-3 py-1 rounded" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="bg-gray-300 rounded">
                                <NavLink
                                    to="/addProduct"
                                    style={{ width: '100%', display: 'block', paddingLeft: '10px' }}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-blue-600 px-3 py-1 rounded" : ""
                                    }
                                >
                                    Add Product
                                </NavLink>
                            </li>
                            <li className="bg-gray-300 rounded">
                                <NavLink
                                    to="/myCart"
                                    style={{ width: '100%', display: 'block', paddingLeft: '10px' }}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-blue-600 px-3 py-1 rounded" : ""
                                    }
                                >
                                    My Cart
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <img className="md:w-2/5 w-3/4" src="https://quattro.true-emotions.studio/wp-content/themes/quattro/images/logo.svg" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" gap-10 menu-horizontal px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-blue-600 px-3 py-1 rounded" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/addProduct"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-blue-600 px-3 py-1 rounded" : ""
                                }
                            >
                                Add Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/myCart"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-blue-600 px-3 py-1 rounded" : ""
                                }
                            >
                                My Cart
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end pr-5">
                    <ul className="text-xl mr-5 flex items-center font-bold">
                        {
                            user ? <div className="dropdown dropdown-end">
                                <label tabIndex={0} >
                                    <div className="avatar cursor-pointer">
                                        <div className="w-11 rounded-full ring ring-blue-500 ring-offset-base-100 ring-offset-2">
                                            {
                                                user?.photoURL ?
                                                    <img src={user.photoURL} /> :
                                                    <img className="bg-blue-600 text-white" />
                                            }
                                        </div>
                                    </div>
                                </label>
                                <ul tabIndex={0} className="dropdown-content z-[2] menu p-3 shadow space-y-2 min-w-[150px] bg-base-100 rounded-box px-4">
                                    <li>{user.displayName}</li>
                                    <li >{user.email}</li>
                                    <hr />
                                    <button onClick={handleSignOut} className="text-xl hover:bg-blue-200 border-2 p-1 rounded-lg text-left">Log out</button>
                                </ul>
                            </div> :
                                <li><NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-blue-600 text-white rounded px-4 py-2" : ""
                                    }
                                >
                                    Login
                                </NavLink></li>
                        }
                    </ul>
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onChange={handleToggle}
                        checked={theme === "light" ? false : true} />

                        {/* sun icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;