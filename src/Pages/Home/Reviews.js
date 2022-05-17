import React from 'react';

const Reviews = ({img,name,review}) => {
    return (
        <div>
            <div class="card w-96 text-black shadow-2xl">
                <div class="card-body">
                    
                    <p>{review}</p>
                </div>
                <div className='flex m-3'>
                    <div><figure><img className='w-12 mr-3 reviewImg' src={img} alt="Shoes" /></figure></div>
                    <div><h2 class="card-title">{name}</h2>
                    <h3 className='text-sm'>California</h3></div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;