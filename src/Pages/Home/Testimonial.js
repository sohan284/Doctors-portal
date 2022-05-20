import React from 'react';
import qoute from './../../assets/icons/quote.svg'
import people1 from './../../assets/images/people1.png'
import people2 from './../../assets/images/people2.png'
import people3 from './../../assets/images/people3.png'
import Reviews from './Reviews';

const Testimonial = () => {
    const reviews = [
        {
            _id:1,
            name:'wilson herry',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people1
        },
        {
            _id:2,
            name:'Beauty Orin',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people2
        },
        {
            _id:3,
            name:'noculas mercary',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img:people3
        }
    ]
    return (
        <section className='mt-20'>
           <div className='flex justify-between'>
           <div className='w-full'>
                <h1 className='text-doctors text-center ml-5'>Testimonial</h1>
                <h1 className='text-2xl text-center text-black  ml-5'>What Our Patients Says</h1>
            </div>
            <div>
                <img className='lg:w-48' src={qoute} alt="" />
            </div>
           </div>
           <div className='grid lg:grid-cols-3 justify-center md:grid-cols-2 sm:grid-cols-1 ml-5 gap-5'>
               {
                   reviews.map(review => <Reviews img={review.img} review={review.review} name={review.name}></Reviews>)
               }

           </div>
        </section>
    );
};

export default Testimonial;