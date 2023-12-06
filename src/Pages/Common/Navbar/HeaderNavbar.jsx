import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import useDropdown from '../../../Hooks/useDropdown';


const HeaderNavbar = () => {
    // const [isOpen, setIsOpen] = useState(false);
    // const dropdownRef = useRef(null);

    // const toggleDropdown = () => {
    //     setIsOpen(!isOpen);
    // };

    // const handleClickOutside = (event) => {
    //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //         setIsOpen(false);
    //     }
    // };

    // useEffect(() => {
    //     document.addEventListener('mousedown', handleClickOutside);

    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, []);

    const { isOpen, setIsOpen, toggleDropdown, dropdownRef } = useDropdown();
    const { isOpen: isOpen1, setIsOpen: setIsOpen1, toggleDropdown: toggleDropdown1, dropdownRef: dropdownRef1 } = useDropdown();
    const { isOpen: isOpen2, setIsOpen: setIsOpen2, toggleDropdown: toggleDropdown2, dropdownRef: dropdownRef2 } = useDropdown();
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);

            }
            if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
                setIsOpen1(false);

            }
            if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
                setIsOpen2(false);

            }
        };

        const handleDocumentClick = (event) => {
            handleClickOutside(event);
        };

        document.addEventListener('mousedown', handleDocumentClick);

        return () => {
            document.removeEventListener('mousedown', handleDocumentClick);
        };
    }, []);

    const headerLink = <>
        <li className='text-md lg:text-[15px] xl:text-xl uppercase custom-bg-yellow'> <Link className='rounded-none'>Who We Are</Link></li>
        <div className="divider divider-horizontal bg-white mx-2 my-0 w-[1px]"></div>


        <li className='text-md lg:text-[14px] xl:text-xl uppercase relative inline-block text-left' ref={dropdownRef}>

            <div className='custom-bg-yellow rounded-none flex flex-col my-2 lg:my-0 '>
                <div onClick={toggleDropdown} className="custom-bg-yellow flex justify-center items-center w-full relative">What We Do <span><FaAngleDown className={`ml-2 ${isOpen ? 'transform rotate-180' : ''}`}></FaAngleDown></span></div>
                {
                    isOpen && <ul className="px-0 pr-2 bg-orange-400 relative left-0 lg:absolute lg:top-12 ">
                        <li className='block custom-bg-yellow rounded-lg my-2 ml-2'><a>About Activities</a></li>
                        <li className='block custom-bg-yellow rounded-lg my-2 ml-2'><a>Mission</a></li>
                        <li className='block custom-bg-yellow rounded-lg my-2 ml-2'><a>Vision</a></li>
                    </ul>
                }
            </div>

        </li>
        <div className="divider divider-horizontal bg-white mx-2 my-0 w-[1px]"></div>

        <li className='text-md lg:text-[14px] xl:text-xl uppercase relative inline-block text-left' ref={dropdownRef1}>

            <div className='custom-bg-yellow rounded-none flex flex-col '>
                <div onClick={toggleDropdown1} className="custom-bg-yellow flex justify-center items-center w-full relative">Product <span><FaAngleDown className={`ml-2 ${isOpen1 ? 'transform rotate-180' : ''}`}></FaAngleDown></span></div>
                {
                    isOpen1 && <ul className="px-0 pr-2 bg-orange-400 relative left-0 lg:absolute lg:top-12 ">
                        <li className='custom-bg-yellow rounded-lg my-2 ml-2'><a>Display</a></li>
                        <li className='custom-bg-yellow rounded-lg my-2 ml-2'><a>Battery</a></li>
                        <li className='custom-bg-yellow rounded-lg my-2 ml-2'><a>Back Shell</a></li>
                        <li className='custom-bg-yellow rounded-lg my-2 ml-2'><a>Glass</a></li>
                        <li className='custom-bg-yellow rounded-lg my-2 ml-2'><a>Screen Protector</a></li>
                        <li className='custom-bg-yellow rounded-lg my-2 ml-2'><a>More</a></li>
                    </ul>
                }
            </div>

        </li>
        <div className="divider divider-horizontal bg-white mx-2 my-0 w-[1px]"></div>
        <li className='text-md lg:text-[14px] xl:text-xl uppercase relative inline-block text-left' ref={dropdownRef2}>

            <div className='custom-bg-yellow rounded-none flex flex-col my-2 lg:my-0'>
                <div onClick={toggleDropdown2} className="custom-bg-yellow flex justify-center items-center w-full relative">Publication <span><FaAngleDown className={`ml-2 ${isOpen2 ? 'transform rotate-180' : ''}`}></FaAngleDown></span></div>
                {
                    isOpen2 && <ul className="px-0 pr-2 bg-orange-400 relative left-0 lg:absolute lg:top-12 ">
                        <li className='custom-bg-yellow rounded-lg my-2 ml-2'><a>Different Publication</a></li>
                        <li className='custom-bg-yellow rounded-lg my-2 ml-2'><a>Different Manual</a></li>
                        <li className='custom-bg-yellow rounded-lg my-2 ml-2'><a>Different Guidelines</a></li>
                    </ul>
                }
            </div>

        </li>

        <div className="divider divider-horizontal bg-white mx-2 my-0 w-[1px]"></div>

        <div className="divider divider-horizontal bg-white mx-2 my-0 w-[1px]"></div>
        <li className='text-md lg:text-[15px] xl:text-xl uppercase custom-bg-yellow '> <Link className='rounded-none' to={'/servicing'}> Mobile Servicing</Link></li>
        <div className="divider divider-horizontal bg-white mx-2 my-0 w-[1px]"></div>
        <li className='text-md lg:text-[15px] xl:text-xl uppercase custom-bg-yellow my-2 lg:my-0'> <Link className='rounded-none'> Air Ticket Booking</Link></li>
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