import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import toast, { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='bg-[rgba(246,246,246,1)]'>
            <Toaster/>
            {/* Navbar Section........... */}
            <Navbar />
            {/* Main Dynamic outlet......... */}
            <div className='min-h-[calc(100vh-284px)]'>
                <Outlet />
            </div>
            {/* Footer Section....... */}
            <Footer />
        </div>
    );
};

export default MainLayout;