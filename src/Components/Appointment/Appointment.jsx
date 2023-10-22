/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import bannerImage from '../../assets/images/chair.jpg'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import Option from './Option';
import OptionMain from './OptionMain';
import { useQuery } from 'react-query';
import LoaderTime from '../../Shared/LoaderTime/LoaderTime';

const Appointment = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [selected, setSelected] = useState(new Date());
    const date = format(selected, "PP");
    console.log(date);

    const { data: appointments = [], refetch, isLoading } = useQuery({
        queryKey: ['appointments', date],
        queryFn: async () => {
            const res = await fetch(`https://doctor-portal-back-end.vercel.app?date=${date}`)
            const data = await res.json();
            return data
        }
    });

    if (isLoading) {
        return <LoaderTime></LoaderTime>
    }


    return (
        <div className='appointment margin-b-50'>
            <div className="container">
                <div className='banner-section'>
                    <div className="row reverse justify-small-center">
                        <div className="col-2">
                            <DayPicker
                                mode="single"
                                selected={selected}
                                onSelect={setSelected}
                                className='calender'
                            />
                        </div>
                        <div className="col-2">
                            <img className='banner-img' src={bannerImage} alt="Doctor Portal" />
                        </div>
                    </div>
                </div>
                <div className="available">
                    <h1>Available Services on {format(selected, 'PP')}</h1>
                    <p>Please select a service</p>

                    <div className="row column section-hide">
                        {
                            appointments.map(option => <OptionMain key={option._id} option={option}></OptionMain>)
                        }

                        <h1 className='margin-top-100 margin-b-50'>Available slots for Teeth Orthodontics.</h1>
                    </div>


                    <div className="row column">
                        {
                            appointments.map(option => <Option key={option._id} option={option} selected={selected} refetch={refetch}></Option>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;