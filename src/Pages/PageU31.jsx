import { ArrowRight } from "lucide-react";
import alert from "../assets/alert.png"
import { Link } from 'react-router-dom';


export default function ServiceCompleted() {
  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center px-4">
      
      {/* Card */}
      <div className="bg-white w-full max-w-lg rounded-2xl px-6 py-8 shadow-xl text-center space-y-5">
        
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-md">
            {/* Graduation / Headset Icon (SVG inline for accuracy) */}

            <span className="text-2xl">
                <img src={alert} alt="" className='h-40'/>
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900">
          Services Completed
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed">
          Complete your Course. Please Write a Review
        </p>

        {/* Rating */}
        <div className="flex justify-center gap-1">
          <span className="text-yellow-400 text-lg">
              ★★★★
            </span>
        </div>

        {/* Button */}
        <Link to="/page25">
        <button className="mx-auto mt-2 bg-[#1C1F2E] hover:bg-[#2A2E45] text-white px-6 py-2.5 rounded-full flex items-center gap-3 shadow-md transition">
          Write a Review
          <span className="bg-white text-black rounded-full w-7 h-7 flex items-center justify-center">
            <ArrowRight size={16} />
          </span>
        </button>
        </Link>
      </div>
    </div>
  );
}
