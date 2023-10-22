/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { AuthProvider } from '../../Context/AuthContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckOutForm/CheckoutForm';

const MyAppointmentData = ({ book, i, refetch }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const { user } = useContext(AuthProvider);
    const stripePromise = loadStripe(import.meta.env.VITE_StripKey);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            transition: 'all 1s'
        },
    };

    const openModal = () => {
        setIsOpen(true);
    }


    const closeModal = () => {
        setIsOpen(false);
    }



    return (

        <>
            <tr>
                <td>{i + 1}</td>
                <td>{book.patient}</td>
                <td>{book.treatment}</td>
                <td>$ {book.price}</td>
                <td>{book.date}</td>
                <td>
                    {
                        book?.paid ?
                            <div className='paid'>
                                <p className='margin-0 paid-p'>{book?.paid}</p>
                                <p className='paid-proof'>{book?.paymentId}</p>
                            </div> : <button onClick={openModal} className='payment-btn'>Pay</button>
                    }
                </td>
            </tr>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="modal-header">
                    <p>Hello {user.displayName}</p>
                    <button className='btn-close' onClick={closeModal}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 18L18 6M6 6L18 18" stroke="#8391AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></button></div>
                <h2 className='margin-0 payment-header'>Please Pay For {book.treatment}</h2>
                <p className='pay-details'>Your Appointment : <span>{book.date}</span> at {book.slot}</p>
                <h4 className='margin-0 payment-header-4'>Please Pay <b>$ {book.price}</b></h4>
                <hr />
                <Elements stripe={stripePromise}>
                    <CheckoutForm book={book} closeModal={closeModal} refetch={refetch()}></CheckoutForm>
                </Elements>
            </Modal>
        </>
    );
};

export default MyAppointmentData;