/* eslint-disable no-unused-vars */
import React from 'react';
import fluoride from '../../../assets/icon/fluoride1.png';
import cavity from '../../../assets/icon/cavity.png';
import whitening from '../../../assets/icon/whitening.png';
import Service from './Service';

const Services = () => {

    const serviceInfo = [
        {
            id: 1,
            title: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: fluoride,
            sizeClass: 'size1'
        },
        {
            id: 2,
            title: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: cavity,
            sizeClass: 'size2'
        },
        {
            id: 3,
            title: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: whitening,
            sizeClass: 'size3'
        },

    ]

    return (
        <div className='services'>
            <h2 className='text-center'>OUR SERVICES</h2>
            <h1 className='text-center'>Services We Provide</h1>
            <div className="row column w-100">
                {
                    serviceInfo.map(data => <Service key={data.id} service={data}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;