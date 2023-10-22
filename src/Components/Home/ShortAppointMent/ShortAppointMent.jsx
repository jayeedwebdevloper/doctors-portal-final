/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';

const ShortAppointMent = () => {
    return (
        <div className='appoint-short'>
            <div className="container">
                <div className="row">
                    <div className="col-2 app-hide">
                        <img src={doctor} alt="Doctor Appointment" />
                    </div>
                    <div className="col-2">
                        <h5>Appointment</h5>
                        <h2>Make an appointment Today</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className='theme-btn'>GET STARTED</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShortAppointMent;