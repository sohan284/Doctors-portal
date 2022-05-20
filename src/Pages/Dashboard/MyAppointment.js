import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const MyAppointment = () => {
    const [appointments,setAppointments] = useState([]);
    const [user] = useAuthState(auth)
   
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data));
        }
    }, [user])
    return (
        <div>
            <h2>my appointment  {appointments.length} </h2>
            <div class="overflow-x-auto">
  <table class="table text-white border-2  w-full">
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
        {
            appointments.map((a,index)=>  <tr>
                <td className='bg-white text-black'>{index + 1}</td>
                <td className='bg-white text-black'>{a.patientName}</td>
                <td className='bg-white text-black'>{a.date}</td>
                <td className='bg-white text-black'>{a.slot}</td>
                <td className='bg-white text-black'>{a.treatment}</td>
              </tr>)
        }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;