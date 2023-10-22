/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const OptionMain = ({ option }) => {
    const { name, slots } = option;
    return (
        <div className='col-3'>
            <div className="available-appointment-main">
                <h5>{name}</h5>
            </div>
        </div>
    );
};

export default OptionMain;