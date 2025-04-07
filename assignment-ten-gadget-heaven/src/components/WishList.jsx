import React, { useEffect, useState } from 'react';
import { getToWishList, removeToWishList } from '../utility';
import { CiCircleRemove } from "react-icons/ci";
import { useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const WishList = () => {
    const [wish, setWish] = useState([]);
    const { pathname } = useLocation();


    useEffect(() => {
        const wishList = getToWishList();
        setWish(wishList);
    }, []);

    const handleRemoveWishList = (id) => {
        removeToWishList(id);
        const wishList = getToWishList();
        setWish(wishList);
    }

    return (
        <>
        <Helmet>
            <title>WishList | Gadget Heaven</title>
        </Helmet>
            {
                wish.map((item, index) => (
                    <div key={index} className="hero">
                        <div className="hero-content flex-col lg:flex-row  bg-[#fffff] rounded-xl shadow-lg relative">
                            <img
                                src={item.product_image}
                                className="max-w-sm rounded-lg shadow-2xl" />
                            <div className='flex flex-col gap-3'>
                                <h1 className="text-5xl font-bold">{item.product_title}</h1>
                                <p>{item.description}</p>
                                <p>Price: {item.price}</p>
                            </div>
                            <div>
                                {pathname === '/dashboard/wishList' && (
                                    <div onClick={() => handleRemoveWishList(item.id)} className="absolute -top-1 -right-4 text-2xl cursor-pointer p-3 rounded-full"><CiCircleRemove color='red' size={32} /></div>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default WishList;