// ResetPasswordInput.jsx
// import React, { useState } from "react";
// import { BsEnvelope } from "react-icons/bs";
// import { HiOutlineArrowRight } from "react-icons/hi";
// export default function Component8() {
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");

//   const handleContinue = () => {
//     if (!email && !phone) {
//       alert("Please enter your email or phone number");
//       return;
//     }

//     if (email) {
//       alert(`OTP will be sent to your email: ${email}`);
//       // API call for email OTP
//     } else {
//       alert(`OTP will be sent to your phone: ${phone}`);
//       // API call for phone OTP
//     }
//   };

//   return (
//     <div className=" h-auto  bg-gray-200 p-34 flex flex-col items-center justify-center">
//       <div className="w-full max-w-sm bg-gray-200 rounded-2xl  p-6 flex flex-col items-center justify-center">

//         {/* Description */}
//         <h2 className="text-center text-gray-600 text-sm mb-6">
//           Enter your registered email or phone number to receive an OTP to reset
//           your password
//         </h2>

//         {/* Email input */}
//         <div className="relative mb-4">
//           {/* Icon */}
//           <BsEnvelope
//             className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
//             size={18}
//           />

//           {/* Input */}
//           <input
//             type="email"
//             placeholder="Enter your registered email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full rounded-xl bg-gray-200 pl-11 pr-4 py-3 text-sm text-gray-800 placeholder-gray-500 
//                focus:outline-none focus:ring-2 focus:ring-gray-700"
//           />
//         </div>

//         {/* OR divider */}
//         {/* <div className="text-center text-xs text-gray-400 mb-4">OR</div> */}

//         {/* Phone input */}
//         <input
//           type="tel"
//           placeholder="Enter your registered phone number"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           className="w-full rounded-xl bg-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-500 mb-6 focus:outline-none focus:ring-2 focus:ring-gray-700"
//         />

//         {/* Continue button */}
//         <button
//           type="button"
//           onClick={handleContinue}
//           className="w-full flex items-center justify-between px-5 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-black transition"
//         >
//           Continue
//           <span className="bg-white text-black rounded-full w-7 h-7 flex items-center justify-center">
//             <HiOutlineArrowRight />
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { BsEnvelope } from "react-icons/bs";
// import { HiOutlineArrowRight } from "react-icons/hi";

// export default function Component8() {
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");

//   const handleContinue = () => {
//     if (!email && !phone) {
//       alert("Please enter your email or phone number");
//       return;
//     }

//     if (email) {
//       alert(`OTP will be sent to your email: ${email}`);
//     } else {
//       alert(`OTP will be sent to your phone: ${phone}`);
//     }
//   };

//   return (
//    <div className="w-full flex items-center justify-center py-10 bg-gray-200 ">
//       <div className="w-full max-w-sm px-6">
//         <h2 className="text-center text-gray-700 text-sm mb-6">
//           Enter your registered email or phone number to receive an OTP
//           to reset your password
//         </h2>

//         <div className="relative mb-4">
//           <BsEnvelope
//             className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
//             size={18}
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full rounded-xl bg-stone-400 pl-11 pr-4 py-3 text-sm
//                        text-gray-100 placeholder-gray-500 focus:outline-none
//                        focus:ring-2 focus:ring-gray-700"
//           />
//         </div>

//         <input
//           type="tel"
//           placeholder="Phone Number"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           className="w-full rounded-xl bg-stone-400 px-4 py-3 text-sm
//                      text-gray-800 placeholder-gray-500 mb-6
//                      focus:outline-none focus:ring-2 focus:ring-gray-700"
//         />

//         <button
//           type="button"
//           onClick={handleContinue}
//           className="w-full flex items-center justify-center px-5 py-3
//                      rounded-full bg-gray-900 text-white font-medium
//                      hover:bg-black transition"
//         >
//           Continue
//           <span className="bg-white text-black rounded-full w-7 h-7 flex items-center justify-center">
//             <HiOutlineArrowRight />
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { BsEnvelope } from "react-icons/bs";
// import { CiLock } from "react-icons/ci";
// import { HiOutlineArrowRight } from "react-icons/hi";

// export default function Component8({
//   inputs ,
//   heading ,
//   buttonText = "Continue",
//   theme = "white", // "white" or "black"
// }) {
//   const isDark = theme === "black";
//   const bgColor = isDark ? "bg-[#1C1B1F]" : "bg-gray-200";
//   const inputBg = isDark ? "bg-gray-700 text-white" : "bg-stone-400 text-gray-800";
//   const placeholderColor = isDark ? "placeholder-gray-400" : "placeholder-gray-500";
//   const buttonBg = isDark ? "bg-gray-900 hover:bg-black" : "bg-gray-900 hover:bg-black";
//   const buttonTextColor = "text-white";

//   // Dynamically create state for each input
//   const [values, setValues] = useState(
//     inputs.reduce((acc, curr) => ({ ...acc, [curr.placeholder]: "" }), {})
//   );

//   const handleChange = (placeholder, value) => {
//     setValues({ ...values, [placeholder]: value });
//   };

//   const handleContinue = () => {
//     for (let key in values) {
//       if (!values[key]) {
//         alert(`Please enter your ${key}`);
//         return;
//       }
//     }
//     alert("Form submitted with values: " + JSON.stringify(values));
//   };

//   return (
//     <div className={`w-full flex items-center justify-center py-10 ${bgColor}`}>
//       <div className="w-full max-w-sm px-6">
//         <h2 className={`text-center text-sm mb-6 ${isDark ? "text-white" : "text-gray-700"}`}>
//           {heading}
//         </h2>

//         {inputs.map((input) => (
//           <div key={input.placeholder} className="relative mb-4">
//             {input.type === "email" || input.type === "tel" ? (
//               <BsEnvelope
//                 className="w-full pl-10 pr-4 py-3 rounded-md text-sm bg-[#6C6460] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-gray-400"
//                 size={18}
//               />
//             ) : (
//               <CiLock
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
//                 size={18}
//               />
//             )}
//             <input
//               type={input.type}
//               placeholder={input.placeholder}
//               value={values[input.placeholder]}
//               onChange={(e) => handleChange(input.placeholder, e.target.value)}
//               className={`w-full rounded-xl pl-11 pr-4 py-3 text-sm ${inputBg} ${placeholderColor} focus:outline-none focus:ring-2 focus:ring-gray-700`}
//             />
//           </div>
//         ))}

//         <button
//           type="button"
//           onClick={handleContinue}
//           className={`w-full flex items-center justify-center px-5 py-3 rounded-full ${buttonBg} ${buttonTextColor} font-medium transition`}
//         >
//           {buttonText}
//           <span className="bg-white text-black rounded-full w-7 h-7 flex items-center justify-center ml-2">
//             <HiOutlineArrowRight />
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function Component8({
  titleText = "RESET PASSWORD",
  description = "Enter your details below",
  inputs = [
    { type: "password", placeholder: "Password", icon: <CiLock className="absolute left-3 top-3 text-gray-300 w-5 h-5" /> },
    { type: "password", placeholder: "Confirm Password", icon: <CiLock className="absolute left-3 top-3 text-gray-300 w-5 h-5" /> },
  ],
  onSubmit = () => {}
}) {
  const navigate = useNavigate(); 
  // State for each input dynamically
  const [formData, setFormData] = useState(
    inputs.reduce((acc, input) => ({ ...acc, [input.placeholder]: "" }), {})
  );

  const handleChange = (placeholder, value) => {
    setFormData({ ...formData, [placeholder]: value });
  };

 const handleSubmit = () => {
    // ✅ password validation
    if (formData["Password"] !== formData["Confirm Password"]) {
      alert("Passwords do not match");
      return;
    }

    // API / parent call
    onSubmit(formData);

    // ✅ NAVIGATION HERE
    navigate("/page2");
  };


  return (
    <div className="w-full bg-primary flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 w-full py-6">
        <h2 className="text-center font-semibold mb-3">{titleText}</h2>
        <p className="text-gray-900 text-sm mb-8 text-center">{description}</p>

        {/* Dynamic Inputs */}
        {inputs.map((input, idx) => (
          <div key={idx} className="relative mb-4">
            {input.icon}
            <input
              type={input.type}
              placeholder={input.placeholder}
              value={formData[input.placeholder]}
              onChange={(e) => handleChange(input.placeholder, e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-md text-sm bg-[#6C6460] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
        ))}

        <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto px-2 py-2 mb-2 space-y-3 mt-4">
          <button
            onClick={handleSubmit}
            className="w-full flex items-center justify-center bg-[#1D1F2A] text-white font-semibold py-3 px-6 rounded-full shadow-md relative hover:bg-[#232738] transition"
          >
            <span>Submit</span>
            <span className="absolute right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <FaArrowRight className="text-[#1D1F2A]" size={14} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
