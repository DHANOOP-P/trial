import React, { useState } from "react";
import {
  ArrowLeft,
  CircleChevronLeft,
  Search,
  Phone,
  SlidersHorizontal,
  MoreVertical,
  Bell,
  X,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
// import { profile } from "../assets/user.png"
// import UserProfileMenuBar_47 from "./UserProfileMenuBar_47";

function Component4({
  pop,
  pop1,
  title,
  showMenubar = false,
  showBack = true,
  showSearch = false,
  showPhone = false,
  showFilter = false,
  showMenu = false,
  showclear = false,
  shownotification = false,
  showprofil = false,
  theme = "white", // "black" or "white"
}) {
  const navigate = useNavigate();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [popup,setpopup]=useState()
  const isDark = theme === "black";
  const bgColor = isDark ? "bg-[#1C1B1F]" : "bg-white";
  const textColor = isDark ? "text-white" : "text-[#1C1B1F]";
  const hoverColor = isDark ? "hover:bg-gray-800" : "hover:bg-gray-100";
  const inputBg = isDark ? "bg-[#2b2b2b] text-white" : "bg-gray-100 text-black";

  const BackIcon = isDark ? CircleChevronLeft : ArrowLeft;

  return (
    <>
      {/* HEADER */}
      <header
        className={`px-4 py-4 ${bgColor} ${textColor} transition-all`}
      >
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-2">
            {showBack && (
              <button
                onClick={() => navigate(-1)}
                className={`p-1 rounded-full ${hoverColor}`}
              >
                <BackIcon size={24} />
              </button>
            )}

        {showMenubar && (
            <button
              onClick={pop}
              className={`p-1 rounded-full ${hoverColor}  lg:hidden`}
            >
              <SlidersHorizontal size={24} />
            </button>
          )}


            {/* TITLE */}
            <h1 className="text-lg font-semibold uppercase">{title}</h1>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {showPhone && (
              <Link to="/Page">
                <button className={`p-1 rounded-full ${hoverColor}`}>
                  <Phone size={22} />
                </button>
              </Link>
            )}

            {showFilter && (
              <Link to="/Page16">
                <button className={`p-1 rounded-full ${hoverColor}`}>
                  <SlidersHorizontal size={22} />
                </button>
              </Link>
            )}

            {showSearch && (
              <button
                onClick={() => setShowSearchBar(!showSearchBar)}
                className={`p-1 rounded-full ${hoverColor}`}
              >
                {showSearchBar ? <X size={22} /> : <Search size={22} />}
              </button>
            )}

            {showMenu && (
              <Link to="/Page">
                <button className={`p-1 rounded-full ${hoverColor}`}>
                  <MoreVertical size={22} />
                </button>
              </Link>
            )}
            {showclear && (
              <Link to="/Page">
                <button className={`p-1 rounded-full ${hoverColor}`}>
                  clear
                </button>
              </Link>
            )}

            {shownotification && (
              <Link to="/PageU40">
                <button className={`p-1 rounded-full ${hoverColor}`}>
                  <Bell size={22} />
                </button>
              </Link>
            )}

            {showprofil && (
              
                <button onClick={pop1} className="p-0 bg-white rounded-full">
                  <img className="md:w-10 md:h-10 h-7 w-7 rounded-full" src="" alt="profile" />
                </button>
             
            )}
          </div>
        </div>

        {/* SEARCH BAR BELOW HEADER */}
        {showSearchBar && (
          <div className="mt-4 ">
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              className={`bg-gray-0 border w-full px-4 py-3 rounded-xl outline-none ${inputBg}`}
            />
          </div>
        )}
      </header>
    </>
  );
}

export default Component4;
