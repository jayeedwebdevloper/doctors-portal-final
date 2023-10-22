/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthProvider } from '../../Context/AuthContext';
import LoaderTime from '../../Shared/LoaderTime/LoaderTime';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthProvider);
    const location = useLocation();

    if (loading) {
        return <LoaderTime></LoaderTime>
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default PrivateRouter;