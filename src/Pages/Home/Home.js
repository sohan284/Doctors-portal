import React from 'react';
import Banner from './Banner';
import Info from './Info';
import info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Info></Info>
           <h1 className='text-center text-cyan-400 mt-3 font-bold'>OUR SERVICES</h1>
           <h1 className='text-center text-4xl text-black mb-7'>Service We Provide</h1>
           <Services></Services>
           
        </div>
    );
};

export default Home;