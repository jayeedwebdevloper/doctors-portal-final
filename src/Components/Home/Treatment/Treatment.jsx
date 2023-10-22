/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import treatment from '../../../assets/images/treatment1.jpg';

const Treatment = () => {
    return (
        <div className='container'>
            <div className="row treat column">
                <div className="col-2">
                    <img src={treatment} alt="Treatment" />
                </div>
                <div className="col-2 padding-left">
                    <h1>Exceptional Dental Care, on Your Terms</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className='theme-btn'>GET STARTED</button>
                </div>
            </div>
        </div>
    );
};

export default Treatment;