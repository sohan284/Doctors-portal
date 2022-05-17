import React, { useState } from 'react';

const Service = ({service,setTreatment}) => {
    const {name,slots} = service;
    
    return (
        <div>
            <div class="card w-96 bg-white shadow-xl">
                <div class="card-body">
                    <h2 class="card-title justify-center text-doctors">{name}</h2>
                    <p>{
                       slots.length > 0
                       ?
                       <span></span>
                       :
                       <span className='text-[red]'>Try Another Date</span>  
                        }</p>
                    <p>{slots.length} {slots.length > 1? 'spaces' : 'space'}</p>
                    <p>{slots[0]}</p>
                    <div class="card-actions justify-center">
                       
                        <label
                        onClick={()=>setTreatment(service)}  
                        disabled={slots.length === 0}  for="booking-modal" class="btn bg-doctors text-white border-0 modal-button">BOOK APPOINTMENT</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;