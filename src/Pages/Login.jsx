
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from "react-icons/fa";

import { Helmet } from "react-helmet-async";
import { AuthContext } from './../Providers/AuthProvider';



const Login = () => {

    const { signInUser, signInWithGoogle,  } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        //  error reset
        setLoginError('')
        setLoginSuccess('')


        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                navigate("/")
                toast.success('Login succesfully')
            })
            .catch(error => {
                console.error(error)
                toast.error('invalid email or password')

            })

    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()

            .then(result => {
                console.log(result.user);
                toast.success('Login succesfully')
                navigate("/")


            })
            .catch(error => {
                console.error(error);
            })
    }




  



    return (

        <div className="hero min-h-screen max-w-6xl mx-auto ">
             <Helmet>
                <title>FitnessPal/login</title>
            </Helmet>
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-4xl font-bold">Login now!</h1>

                </div>
                <div className="card shrink-0 w-full shadow-2xl bg-base-100 p-4">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        {
                            loginError && <p className="text-red-500">{loginError}</p>
                        }
                        {
                            loginSuccess && <p className="text-green-500">{loginSuccess}</p>
                        }
                    </form>
                    <p>New here? please <Link to="/signup"><button className="btn btn-link">Sign up</button></Link>

                    </p>
                    <div className="divider divider-success">Login with social media</div>
                    <p><button onClick={handleGoogleSignIn} className="btn btn-ghost">< FaGoogle /> google</button>
                    </p>



                </div>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default Login;
