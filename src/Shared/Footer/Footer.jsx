/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h5>SERVICES</h5>
                        <ul>
                            <li>Emergency Checkup</li>
                            <li>Monthly Checkup</li>
                            <li>Weekly Checkup</li>
                            <li>Deep Checkup</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h5>ORAL HEALTH</h5>
                        <ul>
                            <li>Fluoride Treatment</li>
                            <li>Cavity Filling</li>
                            <li>Teeth Whitening</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h5>OUR ADDRESS</h5>
                        <ul>
                            <li>New York - 101010 Hudson</li>
                        </ul>
                    </div>
                </div>
                <p>Copyright 2022 All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;