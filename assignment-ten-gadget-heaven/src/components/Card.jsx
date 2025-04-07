import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ gadgets }) => {
    const {
        id,
        product_title,
        product_image,
        category,
        price,
        description,
        specification,
        availability,
        rating
    } = gadgets;

    return (
        <div className='bg-[#FFFFFF] p-3 rounded-2xl flex flex-col space-y-3'>
            <img className='rounded-xl items-center' src={product_image} alt="" />
            <h1>{product_title}</h1>
            <h1>Price: {price}$</h1>
            <div>
                <Link to={`/cardDetails/${id}`} className='btn btn-info btn-outline rounded-3xl'>View Details</Link>
            </div>
        </div>
    );
};

export default Card;