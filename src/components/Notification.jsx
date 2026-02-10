import React from "react";
import {
  LayoutGrid,
  Feather,
  Zap,
  CreditCard,
  User,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const notifications = [
  {
    date: "Today",
    items: [
      {
        title: "New Category Course.!",
        desc: "New the 3D Design Course is Available.",
        icon: <LayoutGrid size={18} />,
      },
      {
        title: "New Category Course.!",
        desc: "New the 3D Design Course is Available.",
        icon: <Feather size={18} />,
      },
      {
        title: "Today's Special Offers",
        desc: "You have made a Course Payment.",
        icon: <Zap size={18} />,
      },
    ],
  },
  {
    date: "Yesterday",
    items: [
      {
        title: "Credit Card Connected.!",
        desc: "Credit Card has been Linked.!",
        icon: <CreditCard size={18} />,
      },
    ],
  },
  {
    date: "Nov 20, 2022",
    items: [
      {
        title: "Account Setup Successful.!",
        desc: "Your Account has been Created.",
        icon: <User size={18} />,
      },
    ],
  },
];

const Notifications = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= BACKDROP (DESKTOP ONLY) ================= */}
      <div
        onClick={() => navigate(-1)}
        className="hidden md:block fixed inset-0 bg-black/30 z-40"
      />

      {/* ================= NOTIFICATION PANEL ================= */}
      <div
        className="
          min-h-screen bg-gray-200
          md:fixed md:top-16 md:right-6 md:z-50
          md:w-[600px] md:min-h-0
          md:bg-white md:rounded-xl md:shadow-2xl
          md:max-h-[80vh] md:overflow-y-auto
        "
      >
        {/* ================= DESKTOP HEADER ================= */}
        <div className="hidden md:flex items-center justify-between px-5 py-4 border-b">
          <h2 className="font-semibold text-lg text-gray-800">
            Notifications
          </h2>

          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="p-4 space-y-6">
          {notifications.map((section, idx) => (
            <div key={idx}>
              <p className="text-sm font-semibold text-gray-600 mb-3">
                {section.date}
              </p>

              <div className="space-y-3">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="
                      flex items-center gap-3
                      p-4 rounded-xl
                      bg-white
                      shadow-md shadow-gray-400
                      hover:shadow-lg
                      transition cursor-pointer
                    "
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      {item.icon}
                    </div>

                    <div>
                      <p className="font-semibold text-sm text-gray-800">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notifications;
