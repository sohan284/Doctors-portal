import React from 'react';

const Service = ({img,title,desc}) => {
    return (
        <div className="card w-96 text-black shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
          <div className="card-actions">
          </div>
        </div>
      </div>
    );
};

export default Service;