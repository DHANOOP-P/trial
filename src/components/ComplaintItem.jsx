import { ArrowRight, CalendarDays, CircleAlert, Clock, X, Search } from 'lucide-react'
import React, { useState, useRef } from 'react'
import { IoChevronBackCircleOutline, IoSearch, IoOptionsOutline, IoGrid, IoBookmark, IoRefresh, IoCalendar, IoAdd, IoHelpCircle } from "react-icons/io5";

export default function ComplaintItem() {
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const dateInputRef = useRef(null);
    const textStyle = "text-gray-500 text-sm";

    const handleFilterClick = () => {
        // Triggers the native browser/mobile calendar
        dateInputRef.current.showPicker();
    };

    return (
        <div className="bg-gray-200 min-h-screen">
            {/* --- Content Area --- */}
            <div className="p-8 px-4">
                <div className="relative bg-white rounded-2xl shadow-[0_4px_6px_rgba(75,75,75,0.45)] p-4 w-[45%] mt-4 mx-auto">
                    {/* Left Accent */}
                    <div className="absolute left-0 top-0 h-full w-4 bg-green-700 rounded-l-2xl"></div>

                    {/* Header */}
                    <div className="flex justify-between items-center px-4">
                        <div className="flex items-center gap-2">
                            <h2 className="font-bold text-lg text-blue-900">Tap Repair</h2>
                            <span className="text-xs text-gray-600 cursor-pointer underline">View</span>
                        </div>
                        <button className="text-gray-400"><X size={20}/></button>
                    </div>

                    {/* User */}
                    <div className='flex flex-col px-4 mt-2'>
                        <div className='flex gap-3 justify-start items-center'>
                            <div className='bg-blue-300 rounded-full h-5 w-5'> </div>
                            <p className="font-medium">Keshavan</p>
                        </div>
                        <p className={`${textStyle} ml-8`}>Pending</p>
                    </div>

                    {/* Time and date */}
                    <div className='flex justify-between mt-4 px-4'>
                        <div className='flex gap-2 items-center'>
                            <CalendarDays size={18} className='text-red-400' />
                            <p className={textStyle}>March 20, 2020</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Clock size={18} className='text-yellow-500' />
                            <p className={textStyle}>09:00 - 10:00</p>
                        </div>
                    </div>

                    {/* Amount */}
                    <div className='mt-4 flex justify-between px-4 border-t pt-3'>
                        <p className="font-bold text-gray-700 text-sm">Amount: 300/-</p>
                        <div className='flex gap-2 items-center'>
                            <CircleAlert size={16} className='text-red-400' />
                            <p className='text-red-500 text-xs font-semibold'>Additional Requirement</p>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="px-4">
                        <button className="mt-4 w-[25%] bg-green-700 text-white text-sm shadow-lg rounded-full py-2 px-6 relative font-bold hover:bg-green-800 transition-colors flex justify-center mx-auto">
                            Chat / Call
                            <span className="bg-white w-6 h-6 text-green-700 rounded-full flex items-center justify-center absolute top-1 right-1 shadow-md">
                                <ArrowRight size={16} />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}