/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';
import toast from 'react-hot-toast';

const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { login, googleSign } = useContext(AuthProvider);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from.pathname || '/';

    const handleLogin = (data) => {
        login(data.email, data.password)
            .then(() => {
                navigate(from, { replace: true });
                toast.success('Your Account Successfully Logged', { duration: 3000 });
            })
            .catch(err => {
                toast.error('Your Account Might Not Valid');
                console.log(err);
            })
    }
    const google = () => {
        googleSign()
            .then(() => {
                navigate(from, { replace: true });
                toast.success('Google Sign In Successfully Done', { duration: 3000 })
            })
    }
    return (
        <div className='container'>
            <div className="login-form">
                <div className="form">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <label htmlFor="email">Email</label>
                        <input type="email" {...register('email', {
                            required: 'Please Enter The Email Address'
                        })} id="email" />
                        {
                            errors.email && <p className='error-text'>{errors?.email.message}</p>
                        }
                        <label htmlFor="password">Password</label>
                        <input type="password" {...register('password', {
                            required: 'Please Enter Your Password'
                        })} id='password' />
                        {
                            errors.password && <p className='error-text'>{errors?.password.message}</p>
                        }
                        <Link className='forgot'>Forgot Password ?</Link>
                        <button className='theme-btn-2' type="submit">LOGIN</button>
                        <div className="newAccount">
                            <p>New to Doctors Portal?</p><Link to={'/sign-up'}>Create new account</Link>
                        </div>
                        <div className="or"> <span><hr /></span><p>OR</p><span><hr /></span></div>
                    </form>
                    <button onClick={google} className='theme-btn-3'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;