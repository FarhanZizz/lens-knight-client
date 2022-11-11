import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { BsGoogle } from 'react-icons/bs';

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { login, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'


    const HandleGoogleSignIn = () => {
        googleLogin()
            .then((result) => {
                setError('');
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        login(email, password)
            .then((result) => {
                form.reset();
                setError('');
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    return (
        <div className="hero min-h-screen w-3/4 mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center flex flex-col lg:text-left">
                    <h1 className="text-5xl font-bold text-center my-10">Login now!</h1>
                    <img className='w-2/4 mx-auto' src="https://cdn-icons-png.flaticon.com/512/1042/1042390.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <button onClick={HandleGoogleSignIn} className="btn w-3/4 mx-auto mt-8"><BsGoogle className='mr-2'></BsGoogle> Log in With Google</button>
                    <form onSubmit={handleLoginSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <p className="mt-5 ">Don't have an account? <Link className=' link link-hover' to='/signup'>Register</Link> </p>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;