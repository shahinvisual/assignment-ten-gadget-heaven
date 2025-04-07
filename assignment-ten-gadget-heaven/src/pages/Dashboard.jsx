import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    // const [cart, setCart] = useState([]);
    // useEffect(() => {
    //     const getAllCart = getToItem();
    //     setCart(getAllCart);
    // }, [])
    return (
        <div>
            <Banner
                title={'Dashboard'}
                subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
                buttons={[
                    <NavLink
                        key="1"
                        to="/dashboard/cart"
                        className={({ isActive }) => isActive ? "btn btn-primary active" : "btn hover:btn-primary"}
                    >
                        Cart
                    </NavLink>,
                    <NavLink
                        key="2"
                        to="/dashboard/wishList"
                        className={({ isActive }) => isActive ? "btn btn-secondary active" : "btn hover:btn-secondary"}
                    >
                        Wishlist
                    </NavLink>
                ]}
            />
            {/* <div className='flex flex-col gap-5 my-12'>
                {
                    cart.map((item, index) => <Cart key={index} productItem={item} />)
                }
            </div> */}
            <Outlet/>
        </div>
    );
};

export default Dashboard;