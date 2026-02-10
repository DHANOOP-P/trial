 // import React from 'react'

// const Recieved_msg = () => {
//     return (
//         <div className="px-9 flex justify-start">
//             <div className="inline-block max-w-[75%] bg-[#736A68] text-white px-4 py-2
//                   rounded-r-2xl rounded-bl-none rounded-tl-none mt-3   shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
//                 <p className="text-sm">
//                     {/* Hi, Nicholas Good Evening 😊 */}
//                     A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                 </p>
//                 <p className="text-[10px] text-right mt-1 opacity-70">
//                     10:45
//                 </p>


//             </div>
//         </div>
//     )
// }

// export default Recieved_msg


// const Recieved_msg = ({ text }) => {
//   return (
//     <div className="flex justify-start my-1">
//       <div className="bg-white px-4 py-2 rounded-xl max-w-[75%] shadow">
//         <p className="text-sm">{text}</p>
//       </div>
//     </div>
//   )
// }

// export default Recieved_msg



// import React from "react";

// const Recieved_msg = ({ text }) => {
//   return (
//     <div className="px-2 flex justify-start">
//       <div
//         className="inline-block max-w-[75%] bg-[#736A68] text-white px-3 py-2
//         rounded-r-2xl rounded-bl-none rounded-tl-none mt-3
//         shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
//       >
//         {/* Message Text */}
//         <p className="text-sm leading-relaxed">
//           {text}
//         </p>

//         {/* Time */}
//         <p className="text-[10px] text-right  opacity-50">
//           10:45
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Recieved_msg;


// import React from 'react'

// const Recieved_msg = () => {
//     return (
//         <div className="px-9 flex justify-start">
//             <div className="inline-block max-w-[75%] bg-[#736A68] text-white px-4 py-2
//                   rounded-r-2xl rounded-bl-none rounded-tl-none mt-3   shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
//                 <p className="text-sm">
//                     {/* Hi, Nicholas Good Evening 😊 */}
//                     A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                 </p>
//                 <p className="text-[10px] text-right mt-1 opacity-70">
//                     10:45
//                 </p>


//             </div>
//         </div>
//     )
// }

// export default Recieved_msg


// const Recieved_msg = ({ text }) => {
//   return (
//     <div className="flex justify-start my-1">
//       <div className="bg-white px-4 py-2 rounded-xl max-w-[75%] shadow">
//         <p className="text-sm">{text}</p>
//       </div>
//     </div>
//   )
// }

// export default Recieved_msg



import React from "react";

const Recieved_msg = ({ text }) => {
  return (
    <div className="px-2 flex justify-start">
      <div
        className="inline-block max-w-[75%] bg-[#736A68] text-white px-3 py-2
        rounded-r-2xl rounded-bl-none rounded-tl-none mt-3
        shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
      >
        {/* Message Text */}
        <p className="text-sm leading-relaxed">
          {text}
        </p>

        {/* Time */}
        <p className="text-[10px] text-right  opacity-50">
          10:45
        </p>
      </div>
    </div>
  );
};

export default Recieved_msg;
