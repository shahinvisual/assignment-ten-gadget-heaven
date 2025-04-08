import React from 'react';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from '../components/Header';



const Home = () => {
    const categoriesData = useLoaderData();
    // console.log(categoriesData)
    return (
        <div className='relative'>
            <Helmet>
                <title>Gadget Heaven</title>
            </Helmet>
            {/* Banner Section */}
            <div className='flex-col'>
                <h1 className='font-bold text-5xl text-center pb-12'>Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className="flex flex-col gap-6 sm:flex-row">
                {/* Categories Section.... */}
                <div>
                    <div className='rounded-xl bg-white p-4'>
                        <Categories categories={categoriesData} />
                    </div>
                </div>
                {/* GadgetsCards Section.... */}
                <div className='flex-1'>
                    <Outlet />
                </div>

            </div>
        </div>
    );
};

export default Home;