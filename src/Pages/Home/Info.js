import React from 'react';
import clock from './../../assets/icons/clock.svg'
import maker from './../../assets/icons/marker.svg'
import phone from './../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const Info = () => {
    return (
       <div className='grid  mb-8 lg:grid-cols-3 grid-cols-1 md:grid-cols-3 gap-5'>
           <InfoCard cardTitle="Opening Hours"  bgclassName="bg-doctors" img={clock} desc="our opening hour is 10 am and closing hour is 5pm"></InfoCard>
           <InfoCard cardTitle="Our Location"  bgclassName="bg-dark" img={maker} desc="brooklyn,NY 10036,United State"></InfoCard>
           <InfoCard cardTitle="Contact Us" bgclassName="bg-doctors" img={phone} desc="+00 102 384724"></InfoCard>

       </div>
    );
};

export default Info;