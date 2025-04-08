import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className="navbar container mx-auto px-20">
            <div className="navbar-start">
                <Link to={'/'} className='text-xl font-medium'>Gadget Heaven</Link>
            </div>
            <div className="navbar-center">
                <ul
                    tabIndex={0}
                    className="flex gap-3">
                    <li><NavLink className={({ isActive }) => `font-medium ${isActive ? 'bg-[rgba(11,11,11,0.1)] py-2 px-4  rounded-lg text-black' : 'text-black'}`} to={'/'}>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => `font-medium ${isActive ? 'bg-[rgba(11,11,11,0.1)] py-2 px-4  rounded-lg text-black' : 'text-black'}`} to={'/statistics'}>Statistics</NavLink></li>
                    <li><NavLink className={({ isActive }) => `font-medium ${isActive ? 'bg-[rgba(11,11,11,0.1)] py-2 px-4  rounded-lg text-black' : 'text-black'}`} to={'/dashboard'}>Dashboard</NavLink></li>
                    <li><NavLink className={({ isActive }) => `font-medium ${isActive ? 'bg-[rgba(11,11,11,0.1)] py-2 px-4  rounded-lg text-black' : 'text-black'}`} to={'/support'}>Support</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <div className="border-2 border-[rgba(11,11,11,0.06)] p-2 rounded-full">
                    <MdOutlineShoppingCart size={20} />
                </div>
                <div className="border-2 border-[rgba(11,11,11,0.06)] p-2 rounded-full">
                    <CiHeart size={22} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;