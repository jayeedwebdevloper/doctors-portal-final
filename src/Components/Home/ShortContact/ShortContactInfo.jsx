/* eslint-disable no-unused-vars */
import React from 'react';
import clock from '../../../assets/icon/clock.svg';
import location from '../../../assets/icon/location.svg';
import phone from '../../../assets/icon/phone.svg';
import SingleInfo from './SingleInfo';

const ShortContactInfo = () => {
    const dataInfo = [
        {
            id: 1,
            title: "Opening Hours",
            description: "Lorem Ipsum is simply dummy text of the pri",
            icon: clock,
            bgClass: "theme-bg-1"
        },
        {
            id: 2,
            title: "Visit our location",
            description: "Brooklyn, NY 10036, United States",
            icon: location,
            bgClass: "theme-bg-2"
        },
        {
            id: 3,
            title: "Contact us now",
            description: "+000 123 456789",
            icon: phone,
            bgClass: "theme-bg-1"
        },
    ]
    return (
        <div className="container">
            <div className='row column'>
                {
                    dataInfo.map(data => <SingleInfo key={data.id} data={data}></SingleInfo>)
                }
            </div>
        </div>
    );
};

export default ShortContactInfo;