import React from 'react';
import { Calendar, Clock, AlertOctagon, ChevronDown, ArrowRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TapRepairCard = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden relative font-sans flex">
      
      {/* Green Sidebar */}
      <div className="w-2 md:w-4 bg-green-700"></div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 relative">

        {/* Close Button */}
        <button className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-400 hover:text-gray-600">
          <X size={20} className="md:w-6 md:h-6" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 md:gap-3 mb-1">
          <h2 className="text-lg md:text-2xl font-bold text-slate-800">Tap Repair</h2>
          <button className="text-[10px] md:text-xs text-slate-500 underline mt-1">View</button>
        </div>

        {/* Professional Info */}
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-indigo-200"></div>
          <span className="text-sm md:text-lg text-slate-400 font-medium">Keshavan</span>
        </div>

        {/* Schedule */}
        <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
          <p className="text-slate-400 font-medium text-sm md:text-lg">Scheduled</p>

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">

            {/* Date */}
            <div className="flex items-center gap-2 md:gap-3">
              <Calendar className="text-orange-500 w-4 h-4 md:w-5 md:h-5" />
              <span className="text-slate-400 text-sm md:text-lg">March 20, 2021</span>
            </div>

            {/* Time */}
            <div className="flex items-center gap-2 md:gap-3">
              <Clock className="text-yellow-500 w-4 h-4 md:w-5 md:h-5" />
              <span className="text-slate-400 text-sm md:text-lg">09.00 – 10.00 AM</span>
            </div>

          </div>
        </div>

        {/* Price & Warning */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-5 md:mb-8">
          <div className="text-base md:text-xl text-slate-400 font-medium">
            Amount : <span className="text-slate-500">300 /-</span>
          </div>

          <div className="flex items-center gap-2">
            <AlertOctagon className="text-red-600 w-5 h-5 md:w-6 md:h-6" />
            <span className="text-red-500 text-[10px] md:text-xs font-semibold">
              Additional Requirements
            </span>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate('/U21_B_ADD_NEW_CARD')}
          className="w-full bg-green-800 text-white py-2 md:py-3 px-4 md:px-6 rounded-full flex items-center justify-between hover:bg-green-900 transition-colors"
        >
          <div className="flex-1 flex justify-center items-center gap-1 md:gap-2">
            <span className="font-bold text-sm md:text-lg">Accept & Pay Advance</span>
            <ChevronDown className="w-5 h-5 md:w-7 md:h-7" />
          </div>

          <div className="bg-white rounded-full p-1">
            <ArrowRight className="text-green-800 w-4 h-4 md:w-5 md:h-5" />
          </div>
        </button>

      </div>
    </div>
  );
};

export default TapRepairCard;
