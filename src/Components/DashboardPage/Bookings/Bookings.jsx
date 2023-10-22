/* eslint-disable no-unused-vars */
import React from 'react';
import { useQuery } from 'react-query';
import MyAppointmentData from '../MyAppointmentData';
import BookingData from './BookingData';

const Bookings = () => {
    const url = `https://doctor-portal-back-end.vercel.app/bookings`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
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
            </div>
            <div className="myappointment">
                <table>
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>NAME</th>
                            <th>BOOKED</th>
                            <th>PRICE</th>
                            <th>TIME</th>
                            <th>PAYMENT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((book, i) => <BookingData key={book._id} book={book} i={i}></BookingData>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;