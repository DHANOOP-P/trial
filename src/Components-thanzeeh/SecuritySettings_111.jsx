import React, { useState } from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const SecuritySettings_111 = () => {

  const toggles = [
    { id: "remember", label: "Remember Me", enabled: true },
    { id: "biometric", label: "Biometric ID", enabled: true },
    { id: "faceid", label: "Face ID", enabled: false },
  ];

  const actions = [
    { id: "pin", label: "Change PIN" },
    { id: "password", label: "Change Password" },
  ];

  const navigationLabel = "Google Authenticator";

  /* 🔹 STATE */
  const [values, setValues] = useState(
    toggles.reduce((acc, item) => {
      acc[item.id] = item.enabled ?? false;
      return acc;
    }, {})
  );

  const toggleHandler = (id) => {
    setValues((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleNavigate = () => {
    console.log("Navigate to Google Authenticator page");
    
  };

  const handleAction = (id) => {
    console.log("Action clicked:", id);
  };

  return (
    <section className="min-h-screen bg-white flex flex-col">
      {/* 🔹 CONTENT */}
      <div className="flex-1 px-4 sm:px-6 py-6 max-w-md mx-auto w-full">
        <div className="space-y-5">
          {toggles.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between"
            >
              <span className="text-sm font-medium sm:text-base text-gray-800">
                {item.label}
              </span>

              <button
                onClick={() => toggleHandler(item.id)}
                className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer duration-300 ${
                  values[item.id] ? "bg-gray-900" : "bg-gray-200"
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                    values[item.id] ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>
          ))}

          {/* 🔹 NAVIGATION ROW */}
          <button
            onClick={handleNavigate}
            className="w-full flex items-center justify-between text-sm font-medium sm:text-base text-gray-800 py-2 cursor-pointer"
          >
            <span>{navigationLabel}</span>
            <span className="text-xl"><MdOutlineKeyboardArrowRight /></span>
          </button>
        </div>
      </div>

      {/* 🔹 BOTTOM ACTIONS */}
      <div className="px-4 sm:px-6 pb-6 pt-4 max-w-md mx-auto w-full space-y-4">
        {actions.map((btn) => (
          <button
            key={btn.id}
            onClick={() => handleAction(btn.id)}
            className="
              w-full py-3 rounded-full
              text-sm sm:text-base font-medium
              bg-gray-100 text-gray-800
              shadow-md shadow-gray-300
              transition-all duration-300
              hover:bg-gray-900 hover:text-white
              hover:shadow-lg cursor-pointer
            "
          >
            {btn.label}
          </button>
        ))}
      </div>
    </section>  )
}

export default SecuritySettings_111;

 