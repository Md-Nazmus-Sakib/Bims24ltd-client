import React from 'react';

const HeaderNavbar = () => {

    const headerLink = <>
        <li className='text-md lg:text-[17px] xl:text-xl uppercase bg-yellow-500 rounded-lg my-2 ml-2 lg:rounded-none lg:my-0 lg:ml-0'> <summary > Who We Are</summary></li>
        <div className="divider divider-horizontal bg-white mx-0 my-0 w-[1px]"></div>
        <li className='text-md lg:text-[17px] xl:text-xl uppercase'>
            <details    >
                <summary className="bg-yellow-500 rounded-none">What We Do</summary>
                <ul className="px-0 bg-orange-400">
                    <li className='bg-yellow-500 rounded-lg my-2 ml-2'><a>About Activities</a></li>
                    <li className='bg-yellow-500 rounded-lg my-2 ml-2'><a>Mission</a></li>
                    <li className='bg-yellow-500 rounded-lg my-2 ml-2'><a>Vision</a></li>
                </ul>
            </details>
        </li>
        <div className="divider divider-horizontal bg-white mx-0 my-0 w-[1px]"></div>
        <li className='text-md lg:text-[17px] xl:text-xl uppercase'>
            <details    >
                <summary className="bg-yellow-500 rounded-none">Product</summary>
                <ul className="px-0 bg-orange-400">
                    <li className='bg-yellow-500 rounded-lg my-2 ml-2'><a>Display</a></li>
                    <li className='bg-yellow-500 rounded-lg my-2 ml-2'><a>Battery</a></li>
                    <li className='bg-yellow-500 rounded-lg my-2 ml-2'><a>Back Shell</a></li>
                    <li className='bg-yellow-500 rounded-lg my-2 ml-2'><a>Glass</a></li>
                    <li className='bg-yellow-500 rounded-lg my-2 ml-2'><a>Screen Protector</a></li>
                    <li className='bg-yellow-500 rounded-lg my-2 ml-2'><a>More</a></li>
                </ul>
            </details>
        </li>
        <div className="divider divider-horizontal bg-white mx-0 my-0 w-[1px]"></div>
        <li className='text-md lg:text-[17px] xl:text-xl uppercase'>
            <details    >
                <summary className="bg-yellow-500 rounded-none">Publication</summary>
                <ul className="px-0 bg-orange-400">
                    <li className='bg-yellow-500 rounded-lg my-2 ml-2'><a>Different Publication</a></li>
                    <li className='bg-yellow-500 rounded-lg my-2 ml-2'><a>Different Manual</a></li>
                    <li className='bg-yellow-500 rounded-lg my-2 ml-2'><a>Different Guidelines</a></li>
                </ul>
            </details>
        </li>
        <div className="divider divider-horizontal bg-white mx-0 my-0 w-[1px]"></div>
        <li className='text-md lg:text-[17px] xl:text-xl uppercase bg-yellow-500 rounded-lg my-2 ml-2 lg:rounded-none lg:my-0 lg:ml-0'> <summary > Mobile Servicing</summary></li>
        <div className="divider divider-horizontal bg-white mx-0 my-0 w-[1px]"></div>
        <li className='text-md lg:text-[17px] xl:text-xl uppercase bg-yellow-500 rounded-lg my-2 ml-2 lg:rounded-none lg:my-0 lg:ml-0'> <summary > Air Ticket Booking</summary></li>
    </>
    return (
        <div className="navbar bg-orange-400 text-white font-bold">

            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-400 rounded-box w-52 ">
                    {
                        headerLink
                    }
                </ul>
            </div>


            <div className="navbar-start hidden lg:flex w-full">
                <ul className="menu menu-horizontal px-1 mx-auto">
                    {
                        headerLink
                    }

                </ul>
            </div>

        </div>
    );
};

export default HeaderNavbar;