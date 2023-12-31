import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import MobileServicing from '../Pages/MobileServicing/MobileServicing';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/servicing',
                element: <MobileServicing></MobileServicing>
            },

        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
])
const Router = () => {
    return (
        <div>

        </div>
    );
};

export default Router;