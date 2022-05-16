import React from 'react';
import clock from './../../assets/icons/clock.svg'
import maker from './../../assets/icons/marker.svg'
import phone from './../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const Info = () => {
    return (
       <div className='grid bg-white mb-8 sm:grid-cols-1 grid-cols-3 md:grid-cols-3 gap-5'>
           <InfoCard cardTitle="Opening Hours"  bgClass="bg-accent" img={clock} desc="our opening hour is 10 am and closing hour is 5pm"></InfoCard>
           <InfoCard cardTitle="Our Location"  bgClass="bg-dark" img={maker} desc="brooklyn,NY 10036,United State"></InfoCard>
           <InfoCard cardTitle="Contact Us" bgClass="bg-accent" img={phone} desc="+00 102 384724"></InfoCard>

       </div>
    );
};

export default Info;