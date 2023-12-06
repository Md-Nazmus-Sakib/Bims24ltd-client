import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaSearch, FaTwitter, FaYoutube } from "react-icons/fa";
import { AuthContext } from '../../../AuthProvider/AuthProvider';


const Navbar = () => {
    const { user, loading, createUser, signIn, logOut, setLoading } = useContext(AuthContext);
    // console.log(user)
    if (loading) {
        return <div className='flex justify-center items-center min-h-screen'>
            <span className="loading loading-bars loading-lg text-error"></span>
        </div>
    }
    const handelLogOut = () => {
        logOut()
            .then(() => {
                console.log('logout')
                setLoading(false)
            })
            .catch(error => console.log(error))

    }

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
        {
            user ? <li><Link onClick={handelLogOut} className='text-xl'>Logout</Link></li> :
                <li><Link to={'/login'} className='text-xl'>Login</Link></li>
        }
    </>
    return (

        <div className="min-h-0 h-[45px] navbar bg-orange-500 text-white font-bold px-4 sm:px-20 my-0 py-0 ">
            <div className="navbar-start my-0">

                <Link to={'/'}><button className="text-3xl font-bold bg-orange-400 my-0 px-4 sm:px-12 py-1">BIMS24LTD</button></Link>
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
            <div className="navbar-end w-full hidden lg:flex my-0 py-0">
                <ul className="menu menu-horizontal px-1 my-0">
                    {
                        links
                    }
                </ul>
            </div>

        </div>

    );
};

export default Navbar;