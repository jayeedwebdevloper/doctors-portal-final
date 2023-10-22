/* eslint-disable no-unused-vars */
import React from 'react';

const ShortContactSection = () => {
    return (
        <div className='short-contact'>
            <h5 className="text-center">Contact Us</h5>
            <h1 className='text-center'>Stay connected with us</h1>
            <div className="container">
                <div className="subscribe text-center">
                    <form>
                        <input type="email" placeholder='Email Address' />
                        <input type="text" placeholder='Subject' />
                        <textarea placeholder='Your Message'></textarea>
                        <button className='theme-btn'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ShortContactSection;