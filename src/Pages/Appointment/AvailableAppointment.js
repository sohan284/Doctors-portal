import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const AvailableAppointment = ({date}) => {
    // const [services,setServices] = useState([]);
    const [treatment,setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    const {data: services,isLoading,refetch} =useQuery(['available',formattedDate],()=>  fetch(`http://localhost:5000/available?date=${formattedDate}`)
    .then(res => res.json())    
    )
    if(isLoading){
        return <Loading></Loading>
    }
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res=>res.json())
    //     .then(data=>setServices(data))
    // },[formattedDate])

    return (
       <div>
           <h4 className='text-3xl  text-white rounded-lg font-bold text-center mb-5 bg-doctors p-3'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
           {
               services?.map(service=> <Service service={service} key={service._id}
               setTreatment={setTreatment}
               ></Service>)
           }
        </div>
        {treatment && <BookingModal 
        treatment={treatment} 
        date={date} 
        setTreatment={setTreatment}
        refetch={refetch}
        ></BookingModal>}
       </div>
    );
};

export default AvailableAppointment;