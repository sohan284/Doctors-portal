import React from 'react';

const InfoCard = ({cardTitle,img,bgClass,desc}) => {
    return (
        <div className={`card lg:card-side ${bgClass}  shadow-x`}>
        <figure className='pl-5'>
            <img src={img} alt="Album" />
        </figure>
        <div className="card-body text-white">
            <h2 className="card-title">{cardTitle}</h2>
            <p>{desc}</p>
        </div>
    </div>
    );
};

export default InfoCard;