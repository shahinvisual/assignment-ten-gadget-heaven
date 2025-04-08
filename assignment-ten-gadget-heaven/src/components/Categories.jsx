import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
    // console.log(categories)
    return (
        <div className='flex flex-col gap-5 py-3 bg-[#ffff] p-4 '>
            <NavLink to={'/'} className={({ isActive }) =>  `block w-full rounded-full border px-6 py-3 ${isActive ? "bg-[#9538E2] font-bold text-white" : "bg-gray-100"}`}>All Products</NavLink>

            {
                categories.map((item, index) => <NavLink key={index} to={`/category/${item.category}`} className={({ isActive }) =>  `block w-full rounded-full border px-6 py-3 ${isActive ? "bg-[#9538E2] font-bold text-white" : "bg-gray-100"}`}>{item.category}</NavLink>)
            }
        </div>
    );
};

export default Categories;