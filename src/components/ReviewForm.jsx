import React from 'react'
import { Link } from 'react-router-dom';
import upload from "../assets/upload.png"
import { IoChevronBackCircleOutline } from "react-icons/io5";

export default function ReviewForm() {
  return (
    <div className='bg-gray-300 min-h-screen flex flex-col font-sans'>
      
      {/* -----------------Service Info Card (New Item)----------------- */}
      <div className="px-6 mt-4 w-[70%] mx-auto">
        <div className="bg-white rounded-2xl p-8 flex items-center gap-4 shadow-sm border border-gray-100">
          {/* Black Square Placeholder for Image */}
          <div className="w-24 h-24 bg-black rounded-xl flex-shrink-0"></div>
          
          <div className="flex flex-col">
            <span className="text-[14px] font-bold text-orange-400 uppercase tracking-tight">
              Graphic Design
            </span>
            <h2 className="text-md font-bold text-gray-800 leading-tight">
              Setup your Graphic Desig..
            </h2>
          </div>
        </div>
      </div>

      <div className='p-6 flex flex-col w-[70%] mx-auto'>
        {/* ----------------upload image and video---------------- */}
        <div>
          <p className="text-sm font-medium mb-4">Add Photo (or) Video</p>
          <label className="cursor-pointer">
            <div className="bg-white rounded-xl h-35 flex flex-col justify-center items-center shadow-lg">
              <span className="text-2xl">
                <img src={upload} alt="" className='h-10'/>
              </span>
              <p className="text-xs text-gray-600">Click here to Upload</p>
            </div>
            <input type="file" className="hidden" />
          </label>
        </div>

        {/* --------------------Review Input------------------------- */}
        <div>
          <p className="text-sm font-medium my-4">Write Your Review</p> 
          <div className="bg-white rounded-xl h-50 flex flex-col shadow-lg p-4">
            <textarea 
              placeholder='Would u like to write anything about the product'
              className='w-full h-24 outline-none resize-none text-xs'
            >
            </textarea>
            <p className="text-right text-xs text-gray-400 flex justify-end">
              *250 Characters Remaining
            </p>
          </div>
          <Link to="/page26">
          <button className='bg-[#1a1c24] hover:bg-gray-800 text-white w-[50%] rounded-full p-3 mt-12 font-bold shadow-lg transition-transform active:scale-95 flex justify-center mx-auto'>
            Submit Review
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}