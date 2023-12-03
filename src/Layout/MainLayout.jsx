import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Common/Navbar/Navbar';
import HeaderNavbar from '../Pages/Common/Navbar/HeaderNavbar';

const MainLayout = () => {
    return (
        <div className='max-w-[1400px] mx-auto'>
            <Navbar></Navbar>
            <HeaderNavbar></HeaderNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;