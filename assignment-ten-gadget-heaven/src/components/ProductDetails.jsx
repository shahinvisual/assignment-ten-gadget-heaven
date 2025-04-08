import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { addToCard, addToWishList } from '../utility';

const ProductDetails = ({ product }) => {


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
    } = product;




    const handleAddCard = (product) => {
        addToCard(product);
    };
    const handleAddWishList = (wishProduct) => {
        addToWishList(wishProduct);
    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row bg-[#ffffff] py-16 px-12 rounded-xl">
                <img
                    src={product_image}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div className='flex flex-col gap-3'>
                    <h1 className="text-5xl font-bold">{product_title}</h1>
                    <p>Price: {price}</p>
                    <button className='btn btn-outline w-1/4 rounded-full btn-success'>In Stock</button>
                    <p>{description}</p>
                    <div>
                        <h1 className='font-bold text-xl py-3'>Specification </h1>
                        {
                            specification.map((li, index) => (<ul key={index}>
                                <li>{`${index + 1}. ${li}`}</li>
                            </ul>))
                        }
                    </div>
                    <h1 className='font-bold text-xl'>Rating</h1>
                    <div className='flex gap-5'>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                        </div>
                        <div className='rounded-2xl bg-[rgba(9,8,15,0.05)] px-2'>
                            {rating}
                        </div>
                    </div>
                    <div className=' flex gap-5 items-center'>
                        <button onClick={() => handleAddCard(product)} className="btn btn-info rounded-full w-1/2 font-bold text-base">Add to Card <AiOutlineShoppingCart size={22} /> </button>
                        <div onClick={() => handleAddWishList(product)} className='border-2 p-2 rounded-full cursor-pointer'><CiHeart size={25} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;