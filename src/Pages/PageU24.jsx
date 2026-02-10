import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Component4 from "../components/Component";
import Ereciept from "../components/Ereciept";
import HeaderDropDown from "../components/HeaderDropDown";


export default function PageU28() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-200 font-sans relative">
      <div>
        <Component4
          title="Ereciept"
          theme="black"
          showMenu={true}
          onMenuClick={() => setShowDropdown(prev => !prev)}
          onBackClick={() => navigate("/pageM32")}
        />
        {showDropdown && <HeaderDropDown onClose={() => setShowDropdown(false)} />}
      </div>  
      <div id="pdf-content"  className="bg-white text-black">
        <Ereciept />
      </div>  
    </div>
  );
}
