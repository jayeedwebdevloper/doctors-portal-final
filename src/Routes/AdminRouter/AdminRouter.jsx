/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthProvider } from '../../Context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import LoaderTime from '../../Shared/LoaderTime/LoaderTime';
import useAdmin from '../../hook/useAdmin';

const AdminRouter = ({ children }) => {
    const { user, loading } = useContext(AuthProvider);
    const [isAdmin, adminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || adminLoading) {
        return <LoaderTime></LoaderTime>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default AdminRouter;