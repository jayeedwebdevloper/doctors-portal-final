/* eslint-disable no-unused-vars */
import React from 'react';
import doted from '../../../assets/icon/cotation.png';
import profile from '../../../assets/images/people-1.png';
import Comments from './Comments';

const Testimonial = () => {

    const testimonial = [
        {
            id: 1,
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            address: 'California',
            photo: profile
        },
        {
            id: 2,
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            address: 'California',
            photo: profile
        },
        {
            id: 3,
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            address: 'California',
            photo: profile
        },
    ]

    return (
        <div className='container'>
            <div className="row between testimonial">
                <div className="col-2">
                    <h5>Testimonial</h5>
                    <h2>What Our Patients Says</h2>
                </div>
                <div className="col-2">
                    <img className='dotted' src={doted} alt="Doctor Portal" />
                </div>
            </div>
            <div className="row column comments-Section">
                {
                    testimonial.map(data => <Comments key={data.id} data={data}></Comments>)
                }
            </div>
        </div>
    );
};

export default Testimonial;