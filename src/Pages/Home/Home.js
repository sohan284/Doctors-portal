import React from 'react';
import Appoinment from './MakeAppoinment';
import Banner from './Banner';
import Banner2 from './Banner2';
import Info from './Info';
import info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Info></Info>
           <h1 className='text-center text-cyan-400 mt-3 font-bold'>OUR SERVICES</h1>
           <h1 className='text-center text-4xl text-black mb-7'>Service We Provide</h1>
           <Services></Services>
           <Banner2></Banner2>
           <Appoinment></Appoinment>
           <Testimonial></Testimonial>
           <Contact></Contact>
           <Footer></Footer>
           
        </div>
    );
};

export default Home;