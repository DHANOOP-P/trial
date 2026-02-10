


import { useState } from 'react';
import { BsEnvelope } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { HiOutlineArrowRight } from "react-icons/hi";
import {Link} from "react-router-dom"

export default function Component2({ mode = "signup" }) {
  const isSignup = mode === "signup";
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log(mode === "signup" ? "Sign up:" : "Sign in:", formData);
  };

  return (
    <div className="bg-primary flex justify-center mt-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 w-full py-5">

        {/* Heading — ONLY this is items-start */}
        <div className="flex   mb-2">
          <h2 className="text-xl font-semibold text-gray-900">
            Getting Started!
          </h2>
        </div>

        {/* Form body — centered */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto p-6 space-y-4 flex flex-col  items-center"
        >
          {/* Email */}
          <div className="relative w-full md:w-150 ">
            <BsEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 text-md" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#6C6460] text-white pl-10 pr-4 py-2 rounded-md text-md placeholder-white focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Email"
              required
            />
          </div>

          {/* Password */}
          <div className="relative w-full md:w-150">
            <CiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 text-md" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-[#6C6460] text-white pl-10 pr-4 py-2 rounded-md text-md placeholder-white focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Password"
              required
            />
          </div>

          {/* Confirm Password */}
          {isSignup && (
            <div className="relative w-full md:w-150">
              <CiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 text-md" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-[#6C6460] text-white pl-10 pr-4 py-2 rounded-md text-md placeholder-white focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Confirm Password"
                required
              />
            </div>
          )}

          {/* Checkbox */}
          {isSignup && (
            <div className="relative w-full md:w-150">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="h-4 w-4"
                required
              />
              <label className="ml-2 text-sm text-gray-900">
                Agree to Terms & Conditions
              </label>
            </div>
          )}

          {/* Button */}
        
       <Link className='w-full' to="/Page5
       ">
         <button
  type="submit"
  disabled={isSignup && !formData.agree}
  className="w-full mt-4 flex items-center justify-center bg-[#1D1F2A] text-white font-semibold py-3 px-6 rounded-full shadow-md relative disabled:opacity-50"
>
  <span>{isSignup ? "Sign Up" : "Sign In"}</span>

  <span className="absolute right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
    <HiOutlineArrowRight className="text-black" size={14} />
  </span>
</button>
</Link> 

        </form>
      </div>
    </div>
  );
}

