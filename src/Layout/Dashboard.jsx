/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import Header from '../Shared/Header/Header';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthProvider } from '../Context/AuthContext';
import useAdmin from '../hook/useAdmin';

const Dashboard = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const { user } = useContext(AuthProvider);
    const [isAdmin] = useAdmin(user?.email);

    const mobileMenu = () => {
        const id = document.getElementById('drop');
        if (id.style.display == 'block') {
            id.style.display = 'none';
        }
        else {
            id.style.display = 'block';
        }
    }

    const dNone = () => {
        const id = document.getElementById('drop');
        if (id.style.display == 'block') {
            id.style.display = 'none';
        }
        else {
            id.style.display = 'block';
        }
    }

    return (
        <div>
            <Header></Header>
            <div className="dash-body">
                <div className="side-menu">
                    <ul>

                        {
                            !isAdmin ? <>
                                <li><NavLink to={'/dashboard'}>My Appointment</NavLink></li>
                            </> :
                                <>
                                    <li><NavLink to={'/dashboard/all-user'}>All Users</NavLink></li>
                                    <li><NavLink to={'/dashboard/add-doctor'}>Add a Doctor</NavLink></li>
                                    <li><NavLink to={'/dashboard/manage-doctors'}>Manage Doctors</NavLink></li>
                                    <li><NavLink to={'/dashboard/bookings'}>Bookings</NavLink></li>
                                    <li><NavLink to={'/'}>Home</NavLink></li>
                                </>
                        }

                    </ul>
                </div>
                <div className="side-menu-2">
                    <ul>
                        <li><NavLink to={'/dashboard'} className='side-menu-more'>My Appointment</NavLink>
                            {
                                !isAdmin ? undefined : <button className='more' onClick={mobileMenu}>More... <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg></button>
                            }
                        </li>
                        <div id="drop" className='drop'>
                            <ul>
                                <li><NavLink onClick={dNone} to={'/dashboard/all-user'}>All Users</NavLink></li>
                                <li><NavLink onClick={dNone} to={'/dashboard/add-doctor'}>Add a Doctor</NavLink></li>
                                <li><NavLink onClick={dNone} to={'/dashboard/manage-doctors'}>Manage Doctors</NavLink></li>
                                <li><NavLink onClick={dNone} to={'/dashboard/bookings'}>Bookings</NavLink></li>
                                <li><NavLink onClick={dNone} to={'/'}>Home</NavLink></li>
                            </ul>
                        </div>
                    </ul>
                </div>

                <div className="page">
                    <div className="page-body">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;