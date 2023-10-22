/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <>
           <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer> 
        </>
    );
};

export default Main;