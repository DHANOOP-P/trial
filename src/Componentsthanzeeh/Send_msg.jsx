// import React from 'react'

// const Send_msg = () => {
//     return (
//         <div>
//             <div className="px-9 flex justify-end">
//                 <div
//                     className="inline-block max-w-[75%] bg-[#E8F1FF] text-gray-900 px-4 py-2
//                rounded-l-2xl rounded-tr-none rounded-br-none mt-3
//                  shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
//                 >
//                     <p className="text-sm">
//                         A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     </p>

//                     <p className="text-[10px] text-right mt-1 opacity-70">
//                         10:46
//                     </p>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Send_msg;

// const Send_msg = ({ text }) => {
//   return (
//     <div className="flex justify-end my-1">
//       <div className="bg-[#DCF8C6] px-4 py-2 rounded-xl max-w-[75%]">
//         <p className="text-sm">{text}</p>
//       </div>
//     </div>
//   )
// }

// export default Send_msg



import React from "react";

const Send_msg = ({ text }) => {
  return (
    <div className="px-2 flex justify-end">
      <div
        className="inline-block max-w-[75%] bg-[#E8F1FF] text-gray-900 px-3 py-2
        rounded-l-2xl rounded-tr-none rounded-br-none mt-3
        shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
      >
        {/* Message Text */}
        <p className="text-sm leading-relaxed">
          {text}
        </p>

        {/* Time */}
        <p className="text-[10px] text-right  opacity-50">
          10:46
        </p>
      </div>
    </div>
  );
};

export default Send_msg;
