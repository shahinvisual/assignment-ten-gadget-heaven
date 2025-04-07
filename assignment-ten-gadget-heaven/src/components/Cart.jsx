import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getToItem } from '../utility';
import { TbAdjustments } from "react-icons/tb";

const Cart = () => {

    const [cart, setCart] = useState([]);


    // console.log(cart)
    useEffect(() => {
        const cartData = getToItem();
        setCart(cartData);
    }, []);

    const sortPrice = () => {
        const desPrice = [...cart].sort((a, b) => b.price - a.price);
        setCart(desPrice);

        // console.log(desPrice)
    };

    const handleTotal = ( ) => {
        const totalPrice = [...cart].reduce((a, b) => a + b.price, 0);
        setCart(totalPrice);
        console.log(totalPrice);
    };
    

    // const { description, price, product_image, product_title } = productItem;
    return (
        <>
            <div className='flex justify-around my-12'>
                <div className='font-bold text-xl'>Cart</div>
                <div className='flex gap-5 items-center'>
                    <h1 className='font-bold text-xl'>Total cost: ${cart.reduce((a, b) => a + b.price, 0)}</h1>
                    <button onClick={() => sortPrice()} className='btn btn-info btn-outline rounded-3xl font-bold'>Sort by Price <span><TbAdjustments size={22} /></span></button>
                    <button className='btn btn-info rounded-3xl'>Purchase</button>
                </div>
            </div>
            {
                cart.map((item, index) => (
                    <div key={index} className="hero">
                        <div className="hero-content flex-col lg:flex-row  bg-[#fffff] rounded-xl shadow-lg">
                            <img
                                src={item.product_image}
                                className="max-w-sm rounded-lg shadow-2xl" />
                            <div className='flex flex-col gap-3'>
                                <h1 className="text-5xl font-bold">{item.product_title}</h1>
                                <p>{item.description}</p>
                                <p>Price: {item.price}$</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default Cart;