/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Doctors from '../Home/Doctors/Doctors';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='container'>
                <h1 className="text-center margin-top-100">ABOUT DOCTORS PORTAL</h1>
                <h5 className='theme-text'>Started by a group of doctors from India and abroad as a common platform for Malayalam doctors to engage with the public and collaborate with each other on healthcare-related matters. </h5>
                <ol>
                    <li className='my-23'>The platform promotes networking among doctors globally, allowing them to exchange knowledge, share best practices, and collaborate on various matters to improve healthcare delivery.</li>
                    <li className='my-23'>The portal features various contents such as articles, videos, experience sharing, career guidance, job vacancy listings, awards & recognitions, listings of various social media links and organisations of doctors, event calendar, and details of CMEs</li>
                    <li className='my-23'>It serves as a platform for doctors and different associations of doctors to showcase their contributions to various social causes, to share their activities and collaborate with each other.</li>
                </ol>
                <h4 className='theme-text'>Who can be members </h4>
                <ul>
                    <li className="my-23">Malayalee doctors from around the globe
                    </li>
                    <li className="my-23">Modern medicine doctors</li>
                </ul>
                <h4 className="theme-text">Areas which can be accessed only after logging in as a member</h4>
                <ul>
                    <li>Certain features like career guidance, free job opportunities, protocols & Guidelines, Articles in Journals, open forum for discussion on various topics etc. can be accessed only after logging in as a doctor. </li>
                </ul>
            </div>
            <Doctors></Doctors>
        </>
    );
};

export default About;