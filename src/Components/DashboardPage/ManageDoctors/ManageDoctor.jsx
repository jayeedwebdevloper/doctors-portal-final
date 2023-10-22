/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import toast from 'react-hot-toast';

const ManageDoctor = ({ doctor, i, refetch }) => {

    const deleteDoctor = (id) => {
        fetch(`https://doctor-portal-back-end.vercel.app/doctor-delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.error(`${doctor.drName} is Deleted`);
                    refetch();
                }
            })
    }

    return (
        <tr>
            <td>{i + 1}</td>
            <td><div className="profile"><img src={doctor.drAvatar} alt={doctor.drName} /></div></td>
            <td>{doctor.drName}</td>
            <td>{doctor.drSpecialty}</td>
            <td><button onClick={() => deleteDoctor(doctor._id)} className='theme-btn-danger'>Delete</button></td>
        </tr>
    );
};

export default ManageDoctor;