// import React from 'react'

// const NotificationSettings110 = () => {
//   return (
//     <div>NotificationSettings110</div>
//   )
// }

// export default NotificationSettings110;

import React, { useState } from "react";

const NotificationSettings110 = () => {
  const settings = [
    { id: "offers", label: "Special Offers", enabled: true },
    { id: "sound", label: "Sound", enabled: true },
    { id: "vibrate", label: "Vibrate", enabled: false },
    { id: "general", label: "General Notification", enabled: true },
    { id: "promo", label: "Promo & Discount", enabled: false },
    { id: "payment", label: "Payment Options", enabled: true },
    { id: "update", label: "App Update", enabled: true },
    { id: "service", label: "New Service Available", enabled: false },
    { id: "tips", label: "New Tips Available", enabled: false },
  ];

  const [values, setValues] = useState(
    settings.reduce((acc, item) => {
      acc[item.id] = item.enabled;
      return acc;
    }, {})
  );

  const toggleSetting = (id) => {
    setValues((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="w-full min-h-screen bg-white px-4 sm:px-6 py-6">
      <div className="max-w-md mx-auto space-y-6">
        {settings.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between"
          >
            {/* Label */}
            <span className="text-sm sm:text-base text-gray-800">
              {item.label}
            </span>

            {/* Toggle */}
            <button
              onClick={() => toggleSetting(item.id)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                values[item.id] ? "bg-gray-900" : "bg-gray-200"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                  values[item.id] ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NotificationSettings110;