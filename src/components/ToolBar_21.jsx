// import React from 'react'
// import { LayoutGrid, Bookmark, History, NotebookPen, Plus, HelpCircle } from "lucide-react";

// const ToolBar_21 = () => {
//     return (
//         <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[92%] max-w-105 bg-[#6C625C] rounded-full px-6 py-3 shadow-2xl flex items-center justify-between">
//             <button className="text-white cursor-pointer"><LayoutGrid size={22} /></button>
//             <button className="text-white cursor-pointer"><Bookmark size={22} /></button>
//             <button className="text-white cursor-pointer"><History size={22} /></button>
//             <button className="text-white cursor-pointer"><NotebookPen size={22} /></button>
//             <button className="text-white cursor-pointer"><Plus size={26} /></button>
//             <button className="text-white cursor-pointer"><HelpCircle size={22} /></button>
//         </div>)
// }

// export default ToolBar_21;


import React from 'react'
import { LayoutGrid, Bookmark, History, NotebookPen, Plus, HelpCircle } from "lucide-react";

const ToolBar_21 = () => {
    return (


    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[92%] max-w-[420px] bg-[#6C625C] rounded-full px-6 py-3 shadow-2xl flex items-center justify-between">
      <button className="text-white cursor-pointer">
        <LayoutGrid size={22} />
      </button>

      <button className="text-white cursor-pointer">
        <Bookmark size={22} />
      </button>

      <button className="text-white cursor-pointer">
        <History size={22} />
      </button>

      <button className="text-white cursor-pointer">
        <NotebookPen size={22} />
      </button>

      <button className="text-white cursor-pointer">
        <Plus size={26} />
      </button>

      <button className="text-white cursor-pointer">
        <HelpCircle size={22} />
      </button>
    </div>
        
    )
}

export default ToolBar_21;
 