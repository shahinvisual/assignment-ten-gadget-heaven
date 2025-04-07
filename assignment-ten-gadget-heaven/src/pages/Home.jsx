import React from 'react';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Home = () => {
    const categoriesData = useLoaderData();
    // console.log(categoriesData)
    return (
        <div>
            <Helmet>
                <title>Gadget Heaven</title>
            </Helmet>
            {/* Banner Section */}
            <Banner
                title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'}
                subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
            />
            {/* Categories Section.... */}
            {/* GadgetsCards Section.... */}
            <div className='flex gap-8 justify-center items-start'>
                <Categories categories={categoriesData} />
                <Outlet />
            </div>

        </div>
    );
};

export default Home;