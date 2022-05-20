import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const BookingModal = ({setTreatment, treatment, date }) => {
    const {_id, name, slots } = treatment;
    const [user,loading,error] = useAuthState(auth);
    const formattedDate = format(date, 'PP');

    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }
        console.log(_id,name,slot);
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white">
                    <h3 className="font-bold text-lg text-doctors mb-2">Booking for : {name}</h3>
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 justify-items-center gap-3 '>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered text-doctors w-full max-w-xs" />
                        <select name='slot' className="select text-white select-bordered w-full max-w-xs">
                            {
                                slots.map((slot,index)=> <option value={slot} key={index}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" disabled value={user?.displayName || ''} className="input input-bordered bg-white text-doctors w-full max-w-xs" />
                        <input name='email' type="email" disabled value={user?.email || ''} className="input input-bordered text-doctors bg-white  w-full max-w-xs" />
                        <input type="text" placeholder="Phone" name='phone' className="input input-bordered   w-full max-w-xs" />
                        <input  type="submit" value="submit" className="input btn text-white w-full bg-doctors input-bordered w-full max-w-xs" />
                    </form>
                    <div className="modal-action">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;