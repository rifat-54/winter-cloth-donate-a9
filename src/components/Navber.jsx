import React, { useContext } from "react";
import './navber.css'
import navLogo from '../assets/istockphoto-1089323862-612x612.jpg'
import { Link, NavLink } from "react-router-dom";
import { authContex } from "../Routes/AuthProvider";

const Navber = () => {

    const {user,handleLogOut}=useContext(authContex)
    // console.log(user?.photoURL)

    const links=<div className="text-white space-x-5 text-xl lg:text-2xl font-bold">

        <NavLink className="btn" to={'/'}>Home</NavLink>
        <NavLink className="btn" to={'/donation'}>Donation Campaigns</NavLink>
        <NavLink className="btn" to={'/help'}>How to Help</NavLink>
        <NavLink className="btn" to={'/dashboard'}>Dashboard</NavLink>
       
    </div>
  return (
    <div className="navbar bg-[#0077b6]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            
            {links}
          </ul>
        </div>
        <Link to={'/'}>
        <img className="w-16 h-12 rounded-md" src={navLogo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user? <div className="flex gap-3 items-center">
          <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
          <button onClick={handleLogOut} className="btn">Log Out</button>
          </div>:
          <Link className="btn" to={'/login'}>Login</Link>
        }
        
      </div>
    </div>
  );
};

export default Navber;
