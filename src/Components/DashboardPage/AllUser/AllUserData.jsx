/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const AllUserData = ({ user, i, refetch }) => {

    const addAdmin = (id) => {
        fetch(`https://doctor-portal-back-end.vercel.app/user/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                }
            })
    }
    const removeAdmin = (id) => {
        fetch(`https://doctor-portal-back-end.vercel.app/user/r/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                }
            })
    };

    const deleteUser = (id) => {
        fetch(`https://doctor-portal-back-end.vercel.app/user/d/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                }
            })
    }

    return (
        <tr>
            <td>{i + 1}</td>
            <td>{user.displayName}</td>
            <td>{
                user.status != 'admin' ? <button onClick={() => addAdmin(user._id)} className='theme-btn-4'>Make Admin</button> : <button onClick={() => removeAdmin(user._id)} className='theme-btn-4'>Remove Admin</button>
            }</td>
            <td><button onClick={() => deleteUser(user._id)} className='theme-btn-4'>Remove User</button></td>
        </tr>
    );
};

export default AllUserData;