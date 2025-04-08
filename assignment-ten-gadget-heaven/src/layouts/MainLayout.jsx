import React from 'react';
import Footer from '../components/Footer';
import toast, { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Helmet } from "react-helmet-async";

const MainLayout = () => {
    return (
        <div className='bg-[rgba(246,246,246,1)]'>
            <Toaster />
            <Helmet>
                <title>Gadget Heaven</title>
            </Helmet>
            {/* Navbar Section........... */}
            <Header />
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