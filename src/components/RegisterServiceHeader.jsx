import React from 'react';

const RegisterServiceHeader = ({ onBack, title }) => {
  return (
    <div className="w-full bg-[#15171B] px-4 sm:px-6 py-4 sm:py-6 flex items-center gap-3 sm:gap-4">

      <button 
        onClick={onBack}
        // Button size adjusts slightly for mobile (w-8 h-8) vs desktop (sm:w-10 sm:h-10)
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-white/10 transition-all active:scale-95 flex-shrink-0"
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          // Icon scales slightly
          className="w-4 h-4 sm:w-5 sm:h-5"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* RESPONSIVE TEXT FIX:
         - text-base: 16px (Default for mobile)
         - sm:text-lg: 18px (Small tablets)
         - md:text-xl: 20px (Laptops/Desktops)
         - truncate: Prevents text from overflowing if the title is too long
      */}
      <h1 className="text-white text-base sm:text-lg md:text-xl font-bold tracking-wider uppercase truncate">
        {title}
      </h1>
    </div>
  );
};

export default RegisterServiceHeader;