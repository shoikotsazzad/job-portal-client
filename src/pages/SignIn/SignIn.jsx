import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import SocialLogin from '../shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    // Get the page user tried to access; fallback to '/jobdetails'
    const from = location.state?.from?.pathname || '/';

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                console.log('sign in', result.user);
                // Redirect to the original page
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen text-center">
            <div className="hero-content">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
                        <h1 className="md:m-2 md:my-8 md:text-5xl font-bold">Login Now!</h1>
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
