/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const BookingData = ({ book, i }) => {
    return (
        <tr>
            <td>{i + 1}</td>
            <td>{book.patient}</td>
            <td>{book.treatment}</td>
            <td>$ {book.price}</td>
            <td>{book.date}</td>
            <td>
                {
                    book?.paid == 'Paid' ? <p className='paid-p'>{book?.paid}</p> : <p className='theme-text-danger'>Un Paid</p>
                }
            </td>
        </tr>
    );
};

export default BookingData;