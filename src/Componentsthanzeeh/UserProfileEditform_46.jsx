import React, { useRef } from 'react'
import { BiCalendar, BiCamera, BiEnvelope, } from 'react-icons/bi';
import { FaArrowRight } from "react-icons/fa";

const UserProfileEditform_46 = () => {

    // const inputRef = useRef(null);

    return (
        <div className="flex justify-center px-4 py-6 font-sans">
            <div className="w-full max-w-md bg-[#F6F8FC] rounded-2xl p-6">

                {/* Avatar */}
                <div className="relative flex justify-center mb-6">
                    <img
                        src="https://i.pravatar.cc/150"
                        alt="avatar"
                        className="w-24 h-24 rounded-full object-cover"
                    />

                    <button
                        className="absolute bottom-1 right-[38%]
                       bg-white p-2 rounded-full
                       shadow-[0_4px_4px_rgba(0,0,0,0.25)]  cursor-pointer"
                    >
                        <BiCamera size={16} />
                    </button>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">

                    {/* Full Name */}
                    <div className="bg-white px-4 py-3 rounded-xl
                          shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full bg-transparent outline-none text-sm "
                        />
                    </div>

                    {/* Nick Name */}
                    <div className="bg-white px-4 py-3 rounded-xl
                          shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
                        <input
                            type="text"
                            placeholder="Nick Name"
                            className="w-full bg-transparent outline-none text-sm"
                        />
                    </div>

                    {/* Date of Birth */}
                    <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl
                          shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
                        <BiCalendar className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Date of Birth"
                            className="w-full bg-transparent outline-none text-sm"
                        />
                    </div>

                    {/* <div
                        className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-[0_4px_4px_rgba(0,0,0,0.1)]"  >
                        <BiCalendar
                            className="text-gray-400 cursor-pointer"
                            onClick={() => inputRef.current.showPicker()}
                        />

                        <input
                            ref={inputRef}
                            type="date"
                            className="w-full bg-transparent outline-none text-sm"
                        />
                    </div> */}

                    {/* Email */}
                    <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl
                          shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
                        <BiEnvelope className="text-gray-400" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-transparent outline-none text-sm"
                        />
                    </div>

                    {/* Phone */}
                    {/* <div className="bg-white px-4 py-3 rounded-xl
                          shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
                        <input
                            type="text"
                            placeholder="(+91) 724-848-1225"
                            className="w-full bg-transparent outline-none text-sm"
                        />
                    </div> */}

                    <div
                        className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl
             shadow-[0_4px_4px_rgba(0,0,0,0.1)]"
                    >
                        {/* Country code */}
                        <select
                            className="bg-transparent outline-none text-sm pr-2 border-r border-gray-300"
                        >
                            <option value="+91">🇮🇳 +91</option>
                            <option value="+1">🇺🇸 +1</option>
                            <option value="+44">🇬🇧 +44</option>
                            <option value="+971">🇦🇪 +971</option>
                        </select>

                        {/* Phone number */}
                        <input
                            type="tel"
                            placeholder="724-848-1225"
                            className="w-full bg-transparent outline-none text-sm pl-2"
                        />
                    </div>

                    {/* Gender */}
                    <div className="bg-white px-4 py-3 rounded-xl
                          shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
                        <select className="w-full bg-transparent outline-none text-sm">
                            <option>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>

                    {/* Student */}
                    <div className="bg-white px-4 py-3 rounded-xl
                          shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
                        <input
                            type="text"
                            placeholder="Student"
                            className="w-full bg-transparent outline-none text-sm"
                        />
                    </div>

                </div>

                {/* Button */}
                <button
                    className="relative w-full mt-6 bg-[#1E2235] text-white py-3 rounded-full  flex items-center justify-center cursor-pointer"  >
                    Update

                    {/* Arrow */}
                    <span className="absolute right-2 bg-white text-black rounded-full  w-9 h-9 flex items-center justify-center" >
                        <FaArrowRight />
                    </span>
                </button>

            </div>
        </div>
    )
}

export default UserProfileEditform_46;