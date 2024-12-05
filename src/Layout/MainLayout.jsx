import React from 'react';
import Navber from '../components/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navber></Navber>
            <div className='w-11/12 mx-auto'>

            <Outlet></Outlet>
            </div>
            <Toaster></Toaster>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;