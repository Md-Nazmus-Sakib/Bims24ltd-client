import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const { user, loading, createUser, signIn, logOut, setLoading } = useContext(AuthContext)
    const navigate = useNavigate();

    const handelSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const displayUser = result.user;
                // console.log(displayUser)
                navigate('/')
                toast('Successfully Login', {
                    duration: 4000,
                    position: 'top-center',
                    style: {
                        backgroundColor: 'green',
                        color: 'white'
                    },

                });

            })
            .catch(error => {
                // setLoading(false)
                console.log(error.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">



            <div className="card w-full sm:w-2/3 md:w-1/2 p-10 shadow-2xl bg-base-100">

                <h1 className="text-5xl font-bold">Login now!</h1>
                <form onSubmit={handelSignIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className='card-body py-0'>
                    <Link to={'/'}> <button className='btn btn-error text-white w-full'>Back to Home</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Login;