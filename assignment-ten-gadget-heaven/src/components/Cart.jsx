import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getToItem, removeCard } from '../utility';
import { TbAdjustments } from "react-icons/tb";
import { FcApproval } from "react-icons/fc";
import { CiCircleRemove } from "react-icons/ci";
import { Helmet } from 'react-helmet-async';


const Cart = () => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();
    const { pathname } = useLocation();




    useEffect(() => {
        const cartData = getToItem();
        setCart(cartData);
    }, []);

    const sortPrice = () => {
        const desPrice = [...cart].sort((a, b) => b.price - a.price);
        setCart(desPrice);


    };

    const handleTotal = () => {
        const totalPrice = [...cart].reduce((a, b) => a + b.price, 0);
        setTotal(totalPrice);

    };

    const handlePurchase = () => {
        document.getElementById('my_modal_5').showModal();
        handleTotal();
    };

    const handleRemoveCart = (id) => {
        removeCard(id);
        const cartData = getToItem();
        setCart(cartData);
    };



    return (
        <>
            <Helmet>
                <title>Cart | Gadget Heaven</title>
            </Helmet>
            <div className='flex justify-around my-12'>
                <div className='font-bold text-xl'>Cart</div>
                <div className='flex gap-5 items-center'>
                    <h1 className='font-bold text-xl'>Total cost: ${cart.reduce((a, b) => a + b.price, 0)}</h1>
                    <button onClick={() => sortPrice()} className='btn btn-info btn-outline rounded-3xl font-bold'>Sort by Price <span><TbAdjustments size={22} /></span></button>
                    <button onClick={() => handlePurchase()} className='btn btn-info rounded-3xl'>Purchase</button>
                </div>
            </div>
            {
                cart.map((item, index) => (
                    <div key={index} className="hero inline-block">
                        <div className="hero-content flex-col lg:flex-row  bg-[#fffff] rounded-xl shadow-lg relative">
                            <img
                                src={item.product_image}
                                className="max-w-sm rounded-lg shadow-2xl" />
                            <div className='flex flex-col gap-3'>
                                <h1 className="text-5xl font-bold">{item.product_title}</h1>
                                <p>{item.description}</p>
                                <p>Price: {item.price}$</p>
                            </div>
                            <div>
                                {pathname === '/dashboard/cart' && (
                                    <div onClick={() => handleRemoveCart(item.id)} className="absolute -top-1 -right-4 text-2xl cursor-pointer p-3 rounded-full"><CiCircleRemove color='red' size={32} /></div>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            };

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col justify-center items-center">
                    <div className='py-5'><FcApproval size={55} /></div>
                    <h3 className="font-bold text-2xl pb-5">Payment Successfully</h3>
                    <p className="py-2">Thanks for purchasing</p>
                    <p>Total:{total}$</p>
                    <div className="modal-action">
                        <form method="dialog">

                            <button onClick={() => navigate("/")} className="btn w-full">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Cart;