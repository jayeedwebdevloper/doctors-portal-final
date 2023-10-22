/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Service = ({ service }) => {
    const { icon, title, description, sizeClass } = service;
    return (
        <div className='col-3'>
            <div className="service-box text-center">
                <img className={sizeClass} src={icon} alt={title} />
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;