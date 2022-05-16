import React from 'react';
import Service from './Service';
import fluoride from './../../assets/images/fluoride.png'
import cravity from './../../assets/images/cavity.png'
import whitening from './../../assets/images/whitening.png'

const Services = () => {
    return (
        <div className='grid grid-cols-3 gap-5 ml-5'>
            <Service img={fluoride} title="Fluoride Treatment" desc="Fluoride treatement is for your teeeth pirea or any other trouble.We can solve with out sergery"></Service>
            <Service img={cravity} title="Fluoride Treatment" desc="Fluoride treatement is for your teeeth pirea or any other trouble.We can solve with out sergery"></Service>
            <Service img={whitening} title="Fluoride Treatment" desc="Fluoride treatement is for your teeeth pirea or any other trouble.We can solve with out sergery"></Service>
        </div>
    );
};

export default Services;