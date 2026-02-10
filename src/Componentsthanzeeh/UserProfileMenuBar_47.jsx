// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// const menuItems = [
//   "My Profile",
//   "Home",
//   "Bookings",
//   "Active Services",
//   "Services",
//   "Complaints",
//   "Message",
//   "Settings",
//   "Transaction",
//   "History",
//   "Help Center",
//   "Terms & Conditions",
//   "About Us",
//   "Invite a Friend",
// ];

// const UserProfileMenuBar_47 = () => {
//   const [show, setShow] = useState(false);
//   const [active, setActive] = useState("My Profile");

//   return (
//     <div className="relative">

//       {/* Open Button */}
//       <Button onClick={() => setShow(true)}>
//         Open Menu
//       </Button>

//       {/* Modal */}
//       <Modal
//         show={show}
//         onHide={() => setShow(false)}
//         backdrop="static"
//         centered
//         dialogClassName="flex items-center justify-center"
//         contentClassName="bg-transparent border-0 p-0"
//       >
//         {/* Modal Card */}
//         <div
//           className="w-[320px] rounded-2xl
//                      bg-linear-to-b from-[#2b2e38] to-[#1e2028]
//                      shadow-2xl p-5 text-white relative"
//         >
//           {/* Close */}
//           <button
//             onClick={() => setShow(false)}
//             className="absolute top-4 right-4 text-xl cursor-pointer"
//           >
//             ✕
//           </button>

//           {/* Profile */}
//           <div className="flex items-center gap-3 mb-6">
//             <div className="relative">
//               <img
//                 src="https://i.pravatar.cc/100"
//                 className="w-14 h-14 rounded-full object-cover"
//                 alt="profile"
//               />
//               <span
//                 className="absolute top-0 right-0 w-3 h-3 bg-green-500
//                            border-2 border-[#2b2e38] rounded-full"
//               />
//             </div>

//             <div>
//               <h3 className="text-red-400 font-semibold text-sm">
//                 Stone Stellar
//               </h3>
//               <p className="text-xs text-yellow-400">UID: CU102</p>
//               <p className="text-xs text-green-400">Online</p>
//             </div>
//           </div>

//           {/* Menu */}
//           <div className="space-y-1 text-sm">
//             {menuItems.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => setActive(item)}
//                 className={`w-full text-left px-4 py-2 rounded-md transition
//                   ${
//                     active === item
//                       ? "bg-gray-400 text-black font-medium"
//                       : "text-gray-200 hover:bg-white/10"
//                   }`}
//               >
//                 {item}
//               </button>
//             ))}
//           </div>

//           {/* Logout */}
//           <div className="mt-6 flex justify-center">
//             <button className="flex items-center gap-2 text-gray-300 hover:text-white">
//               ⬅ Logout
//             </button>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default UserProfileMenuBar_47;



import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { label: "My Profile", path: "/profile" },
  { label: "Home", path: "/home" },
  { label: "Bookings", path: "/bookings" },
  { label: "Active Services", path: "/active-services" },
  { label: "Services", path: "/services" },
  { label: "Complaints", path: "/complaints" },
  { label: "Message", path: "/Page_45" },
  { label: "Settings", path: "/Settings" },
  { label: "Transaction", path: "/transaction" },
  { label: "History", path: "/history" },
  { label: "Help Center", path: "/Page_41" },
  { label: "Terms & Conditions", path: "/terms" },
  { label: "About Us", path: "/about" },
  { label: "Invite a Friend", path: "/Page_48" },
];

const UserProfileMenuBar_47 = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("My Profile");
  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    setActive(item.label);
    setShow(false);
    navigate(item.path);
  };

  return (
    <div className="relative">
      {/* Open Button */}
      <Button onClick={() => setShow(true)}>Open Menu</Button>

      {/* Modal */}
      {/* <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        centered
        contentClassName="bg-transparent border-0 p-0"
      > */}

        <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        centered
        dialogClassName="flex items-center justify-center"
        contentClassName="bg-transparent border-0 p-0"
      >
        {/* Card */}
        <div className="w-[320px] rounded-2xl bg-linear-to-b from-[#2b2e38] to-[#1e2028] shadow-2xl p-5 text-white relative">
          
          {/* Close */}
          <button
            onClick={() => setShow(false)}
            className="absolute top-4 right-4 text-xl"
          >
            ✕
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <img
                src="https://i.pravatar.cc/100"
                className="w-14 h-14 rounded-full"
                alt="profile"
              />
              <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#2b2e38] rounded-full" />
            </div>

            <div>
              <h3 className="text-red-400 font-semibold text-sm">
                Stone Stellar
              </h3>
              <p className="text-xs text-yellow-400">UID: CU102</p>
              <p className="text-xs text-green-400">Online</p>
            </div>
          </div>

          {/* Menu Items */}
          <div className="space-y-1 text-sm">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleMenuClick(item)}
                className={`w-full text-left px-4 py-2 rounded-md transition
                  ${
                    active === item.label
                      ? "bg-gray-400 text-black font-medium"
                      : "text-gray-200 hover:bg-white/10"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Logout */}
          <div className="mt-6 flex justify-center">
            <button className="flex items-center gap-2 text-gray-300 hover:text-white">
              ⬅ Logout
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserProfileMenuBar_47;
