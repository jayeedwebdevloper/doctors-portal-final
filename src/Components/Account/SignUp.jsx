/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';
import toast from 'react-hot-toast';

const SignUp = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { createUser, updateUser, googleSign } = useContext(AuthProvider);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from.pathname || '/';

    const handleSignUp = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        navigate(from, { replace: true });
                        fetch('https://doctor-portal-back-end.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(user)
                        }).then(res => res.json()).then(data => {
                            if (data.acknowledged) {
                                toast.success('Sign In Successfully Done', { duration: 3000 });
                            }
                        })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }
    const google = () => {
        googleSign()
            .then((result) => {
                navigate(from, { replace: true });
                const user = result.user;
                fetch('https://doctor-portal-back-end.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                }).then(res => res.json()).then(data => {
                    if (data.acknowledged) {
                        toast.success('Google Sign In Successfully Done', { duration: 3000 });
                    }
                })

            })
    }
    return (
        <div className='container'>
            <div className="login-form">
                <div className="form">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <label htmlFor="name">Name</label>
                        <input type="text" {...register('name', { required: 'Please Enter Your Name Here' })} id="name" />
                        {
                            errors.name && <p className='error-text'>{errors?.name.message}</p>
                        }
                        <label htmlFor="email">Email</label>
                        <input type="email" {...register('email', { required: 'Please Enter Your Valid Email Address' })} id="email" />
                        {
                            errors.email && <p className='error-text'>{errors?.email.message}</p>
                        }
                        <label htmlFor="password">Password</label>
                        <input className='margin-b-10' type="password" {...register('password', {
                            required: 'Please Enter A Strong Password',
                            minLength: { value: 8, message: 'Password At Least 8 Character' },
                            pattern: { value: /[A-Za-z]/, message: 'Password Must Be One Capital And One Small Later' }
                        })} id='password' />
                        {
                            errors.password && <p className='error-text'>{errors?.password.message}</p>
                        }
                        <button className='theme-btn-2' type="submit">SIGN UP</button>

                        <div className="newAccount">
                            <p>Already Have Account?</p><Link to={'/login'}>Please Login</Link>
                        </div>
                        <div className="or"> <span><hr /></span><p>OR</p><span><hr /></span></div>

                    </form>
                    <button onClick={google} className='theme-btn-3'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;