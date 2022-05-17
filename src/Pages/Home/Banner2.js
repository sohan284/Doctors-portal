import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton';
import treatment from './../../assets/images/treatment.png'

const Banner2 = () => {
    return (
        <div className='w-2/3 ml-32 mb-20'>
        <div class="hero min-h-screen bg-white">
           <div class="hero-content flex-col lg:flex-row-reverse">
               
               <div>
                   <h1 class="text-5xl text-black font-bold">Exceptional Dental Care, on Your Terms</h1>
                   <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>GET STARTS</PrimaryButton>
               </div>
               <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
           </div>
       </div>
   </div>
    );
};

export default Banner2;