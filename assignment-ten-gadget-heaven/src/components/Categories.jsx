import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
    // console.log(categories)
    return (
        <div className='flex flex-col gap-5 py-3 bg-[#ffff] p-4 '>
            {
                categories.map((item, index) => <NavLink key={index} to={`/category/${item.category}`} className={({ isActive }) => `font-medium ${isActive ? 'btn btn-info rounded-3xl' : 'hover:btn btn-info hover:rounded-3xl'}`}>{item.category}</NavLink>)
            }
        </div>
    );
};

export default Categories;