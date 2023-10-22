/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import AllUserData from './AllUserData';

const AllUser = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const url = `https://doctor-portal-back-end.vercel.app/users`

    const { data: user = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data
        }
    })
    return (
        <div>
            <h4>All Users: {user.length}</h4>
            <table>
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>NAME</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((user, i) => <AllUserData key={user._id} user={user} i={i} refetch={refetch}></AllUserData>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUser;