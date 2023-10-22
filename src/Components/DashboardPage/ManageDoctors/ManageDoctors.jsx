/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import ManageDoctor from './ManageDoctor';

const ManageDoctors = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data: doctors = [], refetch } = useQuery({
        queryKey: ["doctors"],
        queryFn: async () => {
            const res = await fetch('https://doctor-portal-back-end.vercel.app/doctors');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h4>Manage Doctors: {doctors.length}</h4>

            <div className="doctors">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>AVATAR</th>
                            <th>NAME</th>
                            <th>SPECIALTY</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <ManageDoctor key={doctor._id} doctor={doctor} i={i} refetch={refetch}></ManageDoctor>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;