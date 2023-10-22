/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

const Doctors = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const { data: doctors = [] } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('https://doctor-portal-back-end.vercel.app/doctors');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='container'>
            <div className="doctors">
                <div className="services">
                    <h4 className='text-center'>Our Doctors</h4>
                    <h1 className='text-center'>Available Doctors</h1>
                </div>
                <div className="row column">
                    {
                        doctors.map(doctor =>
                            <div key={doctor._id} className="col-3">
                                <div className="doctor-card">
                                    <div className="doctor-photo">
                                        <img src={doctor.drAvatar} alt={doctor.drName} />
                                    </div>
                                    <div className="doctor-details">
                                        <h3 className='margin-0 margin-top-10'>{doctor.drName}</h3>
                                        <h5 className='margin-b-10 margin-top-10 theme-text'>{doctor.drEmail}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctors;