/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import MyAppointmentData from './MyAppointmentData';
import { useQuery } from 'react-query';
import { AuthProvider } from '../../Context/AuthContext';

const DashboardPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { user } = useContext(AuthProvider);

    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AGU', 'SEP', 'OCT', 'NOV', 'DEC'];

    const date = new Date();

    const month = date.getMonth() + 1;

    let monthName = months[month - 1];

    const day = date.getDate();

    const year = date.getFullYear();

    const today = `${monthName} ${day}, ${year}`;

    const url = `https://doctor-portal-back-end.vercel.app/booking?email=${user?.email}`

    const { data: booking = [], refetch } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data
        }
    })


    return (
        <div className='overflow-hidden'>
            <div className="page-header">
                <h4>My Appointment</h4>
                <div className="display-date">
                    {today}
                </div>
            </div>
            <div className="myappointment">
                <table>
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>NAME</th>
                            <th>SERVICE</th>
                            <th>PRICE</th>
                            <th>TIME</th>
                            <th>PAYMENT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map((book, i) => <MyAppointmentData key={book._id} book={book} i={i} refetch={refetch}></MyAppointmentData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardPage;