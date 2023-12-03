import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaSearch, FaTwitter, FaYoutube } from "react-icons/fa";


const Navbar = () => {
    const links = <>
        <li><Link><FaSearch className='w-6 h-6'></FaSearch></Link></li>
        <div className="divider divider-horizontal bg-white my-0 w-[1px]"></div>
        <li><Link><FaFacebook className='w-6 h-6'></FaFacebook></Link></li>
        <div className="divider divider-horizontal bg-white my-0 w-[1px]"></div>
        <li><Link><FaTwitter className='w-6 h-6'></FaTwitter></Link></li>
        <div className="divider divider-horizontal bg-white my-0 w-[1px]"></div>
        <li><Link><FaYoutube className='w-6 h-6'></FaYoutube></Link></li>
        <div className="divider divider-horizontal bg-white my-0 w-[1px]"></div>
        <li><Link className='text-xl'>Contact</Link></li>
    </>
    return (

        <div className="navbar bg-orange-500 text-white font-bold px-4 sm:px-20 my-0 py-0 ">
            <div className="navbar-start">

                <h1 className="text-3xl font-bold bg-orange-400 my-0 px-4 sm:px-12 py-1">BIMS24LTD</h1>
            </div>

            <div className='flex justify-end w-full lg:hidden'>
                <div className="dropdown dropdown-left">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-500 rounded-box w-32">
                        {
                            links
                        }
                    </ul>
                </div>
            </div>
            <div className="navbar-end w-full hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>

        </div>

    );
};

export default Navbar;