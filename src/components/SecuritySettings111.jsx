import React, { useState } from "react";

const SecuritySettings111 = () => {
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

  return (
    <section className="min-h-screen bg-gray-200 flex items-center justify-center px-4">
      {/* 🔹 WHITE CARD */}
      <div
        className="
          w-full max-w-md bg-white
          rounded-2xl
          shadow-lg shadow-gray-400
          flex flex-col
          min-h-[80vh]
        "
      >
        {/* 🔹 TOP CONTENT */}
        <div className="px-4 sm:px-6 py-6 space-y-5">
          {toggles.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <span className="text-sm sm:text-base text-gray-800">
                {item.label}
              </span>

              <button
                onClick={() => toggleHandler(item.id)}
                className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
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

          {/* 🔹 NAVIGATION */}
          <button className="w-full flex items-center justify-between text-sm sm:text-base text-gray-800 py-2">
            <span>{navigationLabel}</span>
            <span className="text-xl">{">"}</span>
          </button>
        </div>

        {/* 🔹 BOTTOM ACTIONS */}
        <div className="mt-auto px-4 sm:px-6 pb-6 pt-4 space-y-4">
          {actions.map((btn) => (
            <button
              key={btn.id}
              className="
                w-full py-3 rounded-full
                text-sm sm:text-base font-medium
                bg-gray-100 text-gray-800
                shadow-md shadow-gray-300
                transition-all duration-300
                hover:bg-gray-900 hover:text-white
                hover:shadow-lg
              "
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySettings111;
