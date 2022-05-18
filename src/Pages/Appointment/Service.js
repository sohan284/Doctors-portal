import React, { useState } from 'react';

const Service = ({service,setTreatment}) => {
    const {name,slots} = service;
    
    return (
        <div>
            <div className="card w-96 bg-white shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center text-doctors">{name}</h2>
                    <p>{
                       slots.length > 0
                       ?
                       <span></span>
                       :
                       <span className='text-[red]'>Try Another Date</span>  
                        }</p>
                    <p>{slots.length} {slots.length > 1? 'spaces' : 'space'}</p>
                    <p>{slots[0]}</p>
                    <div className="card-actions justify-center">
                       
                        <label
                        onClick={()=>setTreatment(service)}  
                        disabled={slots.length === 0}  htmlFor="booking-modal" className="btn bg-doctors text-white border-0 modal-button">BOOK APPOINTMENT</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;