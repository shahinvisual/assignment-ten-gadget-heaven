import React, { useEffect, useState } from 'react';
import { getToWishList } from '../utility';

const WishList = () => {
    const [wish, setWish] = useState([]);


    useEffect(() => {
        const wishList = getToWishList();
        setWish(wishList);
    }, []);

    return (
        <>
            {
                wish.map((item, index) => (
                    <div key={index} className="hero">
                        <div className="hero-content flex-col lg:flex-row  bg-[#fffff] rounded-xl shadow-lg">
                            <img
                                src={item.product_image}
                                className="max-w-sm rounded-lg shadow-2xl" />
                            <div className='flex flex-col gap-3'>
                                <h1 className="text-5xl font-bold">{item.product_title}</h1>
                                <p>{item.description}</p>
                                <p>Price: {item.price}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default WishList;