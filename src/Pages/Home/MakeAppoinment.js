import React from 'react';
import doctor from './../../assets/images/doctor-small.png'
import appoinment from './../../assets/images/appointment.png'
import PrimaryButton from '../../Shared/PrimaryButton';

const MakeAppoinment = () => {
    return (
      <section style={{background: `url(${appoinment})`}} className='flex justify-center mt-10 items-center text-white'> 
          <div  className='flex-1 hidden lg:block md:block p-3'>
              <img className='mt-[-100px]' src={doctor} alt="" />
          </div>
          <div className='flex-1'>
              <h3 className='text-xl text-doctors'>Appoinment</h3>
              <h1 className='text-3xl'>Make an appionment Today</h1>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
              <PrimaryButton>GET STARTED</PrimaryButton>
          </div>
      </section>
    );
};

export default MakeAppoinment;