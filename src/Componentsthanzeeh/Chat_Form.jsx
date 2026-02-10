// import React from 'react'
// import { BiPaperclip } from 'react-icons/bi';
// import { BsMicFill } from "react-icons/bs";

// const Chat_Form = () => {
//     return (
//         <div>
//             <div className="px-9 py-3">
//                 <div className="flex items-center gap-3 bg-[#F7FAFF] rounded-full px-4 py-2
//                       shadow-[0_4px_4px_0_rgba(0,0,0,0.15)]">

//                     {/* Input */}
//                     <input
//                         type="text"
//                         placeholder="Message..."
//                         className="flex-1 bg-transparent outline-none text-sm text-gray-700
//                      placeholder-gray-400"
//                     />

//                     {/* Attach icon */}
//                     <button className="text-gray-500">
//                         <BiPaperclip size={20} />
//                     </button>

//                     {/* Mic button */}
//                     <button className="bg-gray-900 text-white rounded-full p-3">
//                         <BsMicFill size={18} />
//                     </button>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Chat_Form;


// ---------------------------------------------------------------------------------------------------------------------

// import React from 'react'
// import { Send, Mic } from 'lucide-react'
// import { BiPaperclip } from 'react-icons/bi';

// const Chat_Form = ({ input, setInput, onSend }) => {
//     return (
//         <div className="flex items-center gap-2 p-3 border-t">

//             <input
//                 type="text"
//                 placeholder="Type a message"
//                 value={input}
//                 onChange={e => setInput(e.target.value)}
//                 className="flex-1 px-4 py-2 rounded-full bg-gray-100
//                    outline-none text-sm"
//             />



//             {/* Attach icon */}
//             <button className="text-gray-500">
//                 <BiPaperclip size={20} />
//             </button>

//             {input.trim() ? (
//                 <button
//                     onClick={onSend}
//                     className="w-10 h-10 rounded-full bg-[#1E2235]
//                      flex items-center justify-center text-white"
//                 >
//                     <Send size={18} />
//                 </button>
//             ) : (
//                 <button
//                     className="w-10 h-10 rounded-full bg-gray-200
//                      flex items-center justify-center"
//                 >
//                     <Mic size={18} />
//                 </button>
//             )}

//         </div>
//     )
// }

// export default Chat_Form;


//-------------------------------------------------------------------------------------------

// import React from 'react'
// import { Send, Mic } from 'lucide-react'
// import { BiPaperclip } from 'react-icons/bi'

// const Chat_Form = ({ input, setInput, onSend }) => {
//     return (
//         <div className="px-4 py-3">
//             <div
//                 className="flex items-center gap-3
//                 bg-[#F7FAFF] rounded-full px-4 py-2
//                 shadow-[0_4px_4px_0_rgba(0,0,0,0.15)]"
//             >

//                 {/* Text Input */}
//                 <input
//                     type="text"
//                     placeholder="Message..."
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     className="flex-1 bg-transparent outline-none
//                                text-sm text-gray-700
//                                placeholder-gray-400"
//                 />

//                 {/* Attach Icon */}
//                 <button className="text-gray-500">
//                     <BiPaperclip size={20} />
//                 </button>

//                 {/* Mic / Send Button */}
//                 {input.trim() ? (
//                     <button
//                         onClick={onSend}
//                         className="bg-[#1E2235] text-white
//                                    rounded-full p-3"
//                     >
//                         <Send size={18} />
//                     </button>
//                 ) : (
//                     <button
//                         className="bg-gray-900 text-white
//                                    rounded-full p-3"
//                     >
//                         <Mic size={18} />
//                     </button>
//                 )}

//             </div>
//         </div>
//     )
// }

// export default Chat_Form



import React from "react";
import { Send, Mic } from "lucide-react";
import { BiPaperclip } from "react-icons/bi";

const Chat_Form = ({ input, setInput, onSend }) => {
  return (
    <div className="px-4 py-3 bg-white">
      <div
        className="
          flex items-center gap-3
          bg-[#F7FAFF]
          rounded-full
          px-4 py-2
          border border-gray-200
          shadow-[0_2px_6px_rgba(0,0,0,0.12)]
        "
      >
        {/* Text Input */}
        <input
          type="text"
          placeholder="Message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="
            flex-1 bg-transparent outline-none
            text-sm text-gray-700
            placeholder-gray-400
          "
        />

        {/* Attach Icon */}
        <button className="text-gray-500 cursor-pointer">
          <BiPaperclip size={20} />
        </button>

        {/* Mic / Send Button */}
        {input.trim() ? (
          <button
            onClick={onSend}
            className="bg-[#1E2235] text-white rounded-full p-3 cursor-pointer"
          >
            <Send size={18} />
          </button>
        ) : (
          <button
            className="bg-gray-900 text-white rounded-full p-3 cursor-pointer"
          >
            <Mic size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Chat_Form;
