import { Calendar, Clock, Image as ImageIcon, ChevronLeft } from "lucide-react";
import { ArrowRight, CircleAlert } from 'lucide-react'
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function BookingHeader() {
    const tiles ="bg-gray-300 text-sm font-semibold rounded-md px-3 shadow-md"
    const fieldName ="text-sm text-gray-500"

    const [appointmentDate, setAppointmentDate] = useState("2024-01-10");
    const [appointmentTime, setAppointmentTime] = useState("09:45");

  return (
    /*. Main Container to hold everything */
    <div>

      {/* 3. Your Original Code Logic (starts here) */}
      <div className="bg-gray-300 px-4 pt-4 pb-6 rounded-b-3xl shadow-md mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-[65%]">

        {/* Profile Row */}
        <div className="flex items-center gap-3">
          <img
            src="/profile.png" // Ensure this path is correct or use a placeholder
            alt="profile"
            className="w-11 h-11 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Nazrul Islam
            </p>
            <p className="text-xs text-gray-500">
              Electrician ⚡
            </p>
          </div>
        </div>

        {/* Booking ID */}
        <p className="text-xs text-gray-400 mt-2">
          Booking Id : 123421
        </p>

        {/* Title */}
        <div className="mt-4">
          <label className="text-xs text-gray-500">Title</label>
          <div className="bg-white rounded-lg px-4 py-3 mt-1 text-sm shadow-sm">
            Change Bulb
          </div>
        </div>

        {/* Description */}
        <div className="mt-4">
          <label className="text-xs text-gray-500">Description</label>
          <div className="bg-white rounded-lg px-4 py-3 mt-1 text-sm shadow-sm text-gray-600">
            Filled dfdfd sdfdsfdsfd
          </div>
        </div>

        {/* Images */}
        <div className="mt-4">
          <label className="text-xs text-gray-500">Images & Videos</label>
          <div className="flex gap-3 mt-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-sm"
              >
                <ImageIcon className="text-gray-400" size={20} />
              </div>
            ))}
            <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-sm text-xl font-bold text-gray-500">
              +
            </div>
          </div>
        </div>

        {/* Availability */}
        <div className="mt-4">
          <label className="text-xs text-gray-500">Availability</label>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm text-xs">
                    <Calendar size={14} />
                    <input
                      type="date"
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                      className="outline-none bg-transparent text-xs"
                    />
                  </div>

                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm text-xs">
                    <Clock size={14} />
                    <input
                      type="time"
                      value={appointmentTime}
                      onChange={(e) => setAppointmentTime(e.target.value)}
                      className="outline-none bg-transparent text-xs"
                    />
                  </div>
                </div>
          </div>



      </div>
      {/* Your Original Code Logic (ends here) */}
      <Link to="/page27">
      <button className="mt-5 bg-gray-800 hover:bg-gray-800 text-white py-2 rounded-full px-4 mx-auto grid grid-cols-1 md:grid-cols-1 gap-4 w-full md:w-[20%]">
       Completed
        </button>
      </Link>

<div className='bg-gray-300 px-8 py-3 mx-auto grid grid-cols-1 md:grid-cols-1 gap-4 w-full md:w-[65%]'>
        <div className='bg-white p-4 rounded-xl shadow-[0_4px_6px_rgba(75,75,75,0.45)]'>
            <h2 className='font-bold'>Appointment</h2> 
            {/* ------------appointent data and time----- */}
     <div className='flex gap-2 justify-center'>
  <div className={tiles}>
    {new Date(appointmentDate).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    })}
  </div>

  <div className={tiles}>
    {new Date(`1970-01-01T${appointmentTime}`).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })}
  </div>
</div>

     <h4 className='text-sm font-semibold '>Invoice</h4>
    <div className='flex justify-between px-4'>
        <div className={fieldName}>SI.no</div>
        <div className={fieldName}>Description</div>
        <div className={fieldName}>Qty</div>
        <div className={fieldName}>Price</div>
        <div className={fieldName}>Total</div>
    </div>
    <div className='flex justify-between px-4'>
        <div className={fieldName}>1</div>
        <div className={fieldName}>Bulb Change</div>
        <div className={fieldName}>1</div>
        <div className={fieldName}>300</div>
        <div className={fieldName}>300</div>
    </div>
        <div className='flex gap-2 justify-end px-4 mt-8'>
        <div className={fieldName}>Grand Total</div>
        <div className={fieldName}>300</div>
    </div> 
    <p className={fieldName}>Teams and conditions</p>
    <p className={fieldName}>Valid up to 1 month</p>
    <div className='flex gap-2 '>
        <p className='text-sm text-red-600'>Additional Requirement</p>
        <span><CircleAlert className='text-red-600'/></span>
    </div>
    <ul className='text-sm text-gray-500 px-10'>
        <li>Provide Ladder</li>
        <li>Bulb should be provided</li>
    </ul>
    
   </div>
   <Link to='/page32'>
   <button className="mt-4 mx-auto bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-full px-6 grid grid-cols-1 md:grid-cols-1 gap-4 md:w-[35%]">
       Complete Payment
          {/*<span className="bg-white text-gray-950 rounded-full w-8 h-8 flex items-center justify-center absolute top-1 bottom-0 right-1">
           <ArrowRight/>
          </span>*/}
        </button>
        </Link>
        <Link to="/page29">
        <button className="mt-4 mx-auto bg-red-900 hover:bg-red-800 text-white py-2 rounded-full px-6 grid grid-cols-1 md:grid-cols-1 gap-4 md:w-[35%]">
       Raise a Complaint
          {/*<span className="bg-white text-red-900 rounded-full w-8 h-8 flex items-center justify-center absolute top-1 bottom-0 right-1">
           <ArrowRight/>
          </span>*/}
        </button>
        </Link>
    </div>
    </div>
  );
}