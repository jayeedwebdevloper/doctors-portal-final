/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';
import userIcon from '../../assets/icon/user.svg';
import useAdmin from '../../hook/useAdmin';

const Header = () => {
    const { user, logOut } = useContext(AuthProvider);
    const [isAdmin] = useAdmin(user?.email);
    const [display, setDisplay] = useState('none')
    window.onscroll = () => {
        const header = document.querySelector('header');
        if (window.pageYOffset > 100) {
            header.classList.add('box-shadow');
        } else {
            header.classList.remove('box-shadow');
        }
    }

    const toggle = () => {
        const on = document.getElementById('on');
        const off = document.getElementById('off');
        const navBar = document.querySelector('.nav-bar');

        if (on.style.display == 'none') {
            on.style.display = 'block';
            off.style.display = 'none';
            navBar.style.display = 'none';
        } else {
            on.style.display = 'none';
            off.style.display = 'block';
            navBar.style.display = 'block';
        }
    }



    const blockThis = () => {
        if (display == 'block') {
            setDisplay('none');
        } else {
            setDisplay('block');
        }
    }

    const singOut = () => {
        setDisplay('none')
        logOut()
            .then(() => { })
    }


    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo">
                        <Link to={'/'}>Doctors Portal</Link>
                    </div>
                    <div className="main-menu">
                        <ul className="nav-bar">
                            <li className="nav-items">
                                <NavLink to={'/'}>Home</NavLink>
                            </li>
                            <li className="nav-items">
                                <NavLink to={'/about'}>About</NavLink>
                            </li>
                            <li className="nav-items">
                                <NavLink to={'/appointment'}>Appointment</NavLink>
                            </li>
                            <li className="nav-items">
                                <NavLink to={'/contact'}>Contact Us</NavLink>
                            </li>
                            <li className="nav-items">
                                {
                                    user?.uid ? <>
                                        {
                                            isAdmin ? <NavLink to={'/dashboard/all-user'}>Dashboard</NavLink> : <NavLink to={'/dashboard'}>Dashboard</NavLink>
                                        }
                                    </> : undefined
                                }
                            </li>
                            {
                                user?.uid ? <>
                                    {
                                        user?.photoURL ? <div onClick={blockThis} className="userIcon">
                                            <img src={user.photoURL} alt={user.displayName} />
                                        </div> :
                                            <>
                                                <div onClick={blockThis} className="userIcon">
                                                    <img src={userIcon} alt={user.displayName} />
                                                </div>
                                            </>
                                    }
                                    <div style={{ display: display }} className="controlAccount">
                                        <p>{user.displayName}</p>
                                        <p>{user.email}</p>
                                        <button onClick={singOut} className='btn-red'>LOG OUT</button>
                                    </div>
                                </> :
                                    <>
                                        <li className="nav-items">
                                            <NavLink to={'/login'}>Login</NavLink>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                    <div className="toggle">
                        <button onClick={() => toggle()}>
                            <div id="on">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                    <line y1="1" x2="20" y2="1" stroke="black" strokeWidth="2" />
                                    <line y1="8" x2="20" y2="8" stroke="black" strokeWidth="2" />
                                    <line y1="15" x2="20" y2="15" stroke="black" strokeWidth="2" />
                                </svg>
                            </div>
                            <div id="off">
                                <svg xmlns="http://www.w3.org/2000/svg" height="18px" width="20px" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                            </div>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;