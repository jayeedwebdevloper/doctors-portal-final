/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import bannerImage from '../../../assets/images/chair.jpg'

const Banner = () => {
    return (
        <div className="container">
            <div className='banner-section'>
                <div className="row reverse">
                    <div className="col-2">
                        <h1>Your New Smile Starts Here</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className='theme-btn'>GET STARTED</button>
                    </div>
                    <div className="col-2">
                        <img className='banner-img' src={bannerImage} alt="Doctor Portal" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;