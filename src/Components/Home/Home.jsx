/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import ShortContactInfo from './ShortContact/ShortContactInfo';
import Services from './Services/Services';
import Treatment from './Treatment/Treatment';
import ShortAppointMent from './ShortAppointMent/ShortAppointMent';
import Testimonial from './Testimonial/Testimonial';
import ShortContactSection from './ShortContactSection/ShortContactSection';
import Doctors from './Doctors/Doctors';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Banner></Banner>
            <ShortContactInfo></ShortContactInfo>
            <Services></Services>
            <Doctors></Doctors>
            <Treatment></Treatment>
            <ShortAppointMent></ShortAppointMent>
            <Testimonial></Testimonial>
            <ShortContactSection></ShortContactSection>
        </div>
    );
};

export default Home;