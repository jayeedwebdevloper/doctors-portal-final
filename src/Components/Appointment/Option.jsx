/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Modal from 'react-modal';
import { AuthProvider } from '../../Context/AuthContext';

const Option = ({ option, selected, refetch }) => {
    const { name, slots, price } = option;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const date = format(selected, 'PP');
    const { user } = useContext(AuthProvider);


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

    const booking = (e) => {
        e.preventDefault();
        const form = e.target;
        const treatment = name;
        const slot = form.slot.value;
        const patient = form.fullName.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            treatment,
            slot,
            patient,
            phone,
            email,
            date,
            price
        }
        fetch('https://doctor-portal-back-end.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your Serial Is Successfully Booked');
                    refetch()
                } else {
                    toast.error(data.message);
                }
            })
            .catch(err => console.log(err))
        slots.length = 0;
        closeModal();
    }
    return (
        <div className='col-3'>
            <div className="available-appointment">
                <h5>{name}</h5>
                <p>{slots.length > 0 ? `${slots[0]}` : 'Not Available For Now'}</p>
                <p className='margin-top-10 margin-b-0'>{slots.length > 0 ? slots.length : undefined} {slots.length > 1 ? 'Spaces Available' : slots.length == 0 ? ' ' : 'Space Available'}</p>
                <p className='margin-b-20 margin-top-20'>Price : <b>$ {price}</b></p>
                <button disabled={slots.length == 0} onClick={openModal} className='theme-btn'>Book Appointment</button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="modal-header">
                    <h2 className='margin-0'>{name}</h2>
                    <button className='btn-close' onClick={closeModal}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 18L18 6M6 6L18 18" stroke="#8391AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></button></div>
                <form onSubmit={booking} className='modal-form'>
                    <input className='modal-default' type="text" defaultValue={date} disabled />
                    <select className='modal-select' name='slot'>
                        {
                            slots.map(slot => <option value={slot} key={slot}>{slot}</option>)
                        }
                    </select>
                    <input defaultValue={user?.displayName} name='fullName' className='modal-input' type="text" placeholder='Full Name' />
                    <input defaultValue={user?.phoneNumber} name='phone' className='modal-input my-23' type="number" placeholder='Phone Number' />
                    <input defaultValue={user?.email} name='email' className='modal-input' type="email" placeholder='Email' />
                    <button type='submit' className='form-btn'>Submit</button>
                </form>
            </Modal>
        </div>
    );
};

export default Option;