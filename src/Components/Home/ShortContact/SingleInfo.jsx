/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const SingleInfo = ({ data }) => {
    const { title, description, icon, bgClass } = data;
    return (
        <div className={`col-3 short-info-box ${bgClass}`}>
            <div className="row column">
                <div className="col-1/3">
                    <img src={icon} alt={title} />
                </div>
                <div className="col-2/3">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleInfo;