// import React from 'react'

// const AppHeader_4 = () => {
//   return (
//     <div>AppHeader_4</div>
//   )
// }

// export default AppHeader_4;


import React from "react";
import {
  ArrowLeft,
  CircleChevronLeft,
  Search,
  Phone,
  SlidersHorizontal,
  MoreVertical,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AppHeader_4 = ({
  title = "TITLE",
  showBack = true,
  showSearch = false,
  // showSearch = { true},
  showPhone = false,
  showFilter = false,
  showMenu = false,
  theme = "black ", // "black" | "white"
}) => {

  const navigate = useNavigate();


  const isDark = theme === "black";

  const bgColor = isDark ? "bg-[#1C1B1F]" : "bg-white";
  const textColor = isDark ? "text-white" : "text-[#1C1B1F]";
  const hoverColor = isDark ? "hover:bg-gray-800" : "hover:bg-gray-100";

  const BackIcon = isDark ? CircleChevronLeft : ArrowLeft;

  return (
    <header
      className={`flex items-center justify-between px-4 py-4 ${bgColor} ${textColor} transition-all`}
    >
      {/* Left Section */}
      <div className="flex items-center gap-2">
        {showBack && (
          <button

            // onClick={() => navigate("/Page_35")}
                        onClick={() => navigate(-1)}


            className={`p-1 rounded-full ${hoverColor} cursor-pointer`}>
            <BackIcon size={24} />
          </button>
        )}
        <h1 className="text-lg font-semibold uppercase">{title}</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {showPhone && (
          <button className={`p-1 rounded-full ${hoverColor} cursor-pointer`}>
            <Phone size={22} />
          </button>
        )}

        {showFilter && (
          <button className={`p-1 rounded-full ${hoverColor} cursor-pointer`}>
            <SlidersHorizontal size={22} />
          </button>
        )}

        {showSearch && (
          <button className={`p-1 rounded-full ${hoverColor} cursor-pointer`}>
            <Search size={22} />
          </button>
        )}

        {showMenu && (
          <button className={`p-1 rounded-full ${hoverColor} cursor-pointer`}>
            <MoreVertical size={22} />
          </button>
        )}
      </div>
    </header>
  );
};

export default AppHeader_4;

// import React, { useState } from "react";
// import {
//   ArrowLeft,
//   CircleChevronLeft,
//   Search,
//   Phone,
//   SlidersHorizontal,
//   MoreVertical,
// } from "lucide-react";

// const AppHeader_4 = ({
//   title = "TITLE",
//   showBack = true,
//   showSearch = false,
//   showPhone = false,
//   showFilter = true,
//   showMenu = false,
//   theme = "black", // "black" | "white"
// }) => {
//   const [isSearchActive, setIsSearchActive] = useState(false);
//   const [searchValue, setSearchValue] = useState("");

//   const isDark = theme === "black";

//   const bgColor = isDark ? "bg-[#1C1B1F]" : "bg-white";
//   const textColor = isDark ? "text-white" : "text-[#1C1B1F]";
//   const hoverColor = isDark ? "hover:bg-gray-800" : "hover:bg-gray-100";

//   const BackIcon = isDark ? CircleChevronLeft : ArrowLeft;

//   return (
//     <header
//       className={`flex items-center justify-between px-4 py-4 ${bgColor} ${textColor} transition-all`}
//     >
//       {/* Left Section */}
//       <div className="flex items-center gap-2 flex-1">
//         {showBack && (
//           <button className={`p-1 rounded-full ${hoverColor} cursor-pointer`}>
//             <BackIcon size={24} />
//           </button>
//         )}

//         <h1 className="text-lg font-semibold uppercase">{title}</h1>

//         {/* Search Bar */}
//         {showSearch && (
//           <div
//             className={`ml-4 transition-all duration-300 ease-in-out ${
//               isSearchActive ? "w-40 md:w-64" : "w-0 overflow-hidden"
//             }`}
//           >
//             <input
//               type="text"
//               value={searchValue}
//               onChange={(e) => setSearchValue(e.target.value)}
//               placeholder="Search..."
//               className={`w-full px-2 py-1 rounded-md border ${
//                 isDark
//                   ? "border-gray-700 bg-gray-900 text-white placeholder-gray-400"
//                   : "border-gray-300 bg-white text-black placeholder-gray-500"
//               } focus:outline-none focus:ring-2 focus:ring-blue-500`}
//             />
//           </div>
//         )}
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center gap-3">
//         {showPhone && (
//           <button className={`p-1 rounded-full ${hoverColor} cursor-pointer`}>
//             <Phone size={22} />
//           </button>
//         )}

//         {showFilter && (
//           <button className={`p-1 rounded-full ${hoverColor} cursor-pointer`}>
//             <SlidersHorizontal size={22} />
//           </button>
//         )}

//         {showSearch && (
//           <button
//             onClick={() => setIsSearchActive((prev) => !prev)}
//             className={`p-1 rounded-full ${hoverColor} cursor-pointer`}
//           >
//             <Search size={22} />
//           </button>
//         )}

//         {showMenu && (
//           <button className={`p-1 rounded-full ${hoverColor} cursor-pointer`}>
//             <MoreVertical size={22} />
//           </button>
//         )}
//       </div>
//     </header>
//   );
// };

// export default AppHeader_4;
