// import {
//   BellDot,
//   ChevronRight,
//   Eye,
//   Image,
//   Languages,
//   ShieldAlert,
//   ShieldUser,
//   User,
//   Wallet,
//   BadgeQuestionMark,
//   Send,
//   LogOutIcon,
// } from "lucide-react";
// // import profile from "../assets/user.png";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function UserProfile() {
//   const profileOptions = [
//     { icon: <User size={22} />, label: "Edit Profile", path: "/pageu36" },
//     { icon: <Wallet />, label: "Payment Option", path: "/payOption" },
//     { icon: <BellDot />, label: "Notification", path: "/pageu40" },

//     // Language dropdown
//     { icon: <Languages />, label: "Language", isLanguage: true },

//     { icon: <Eye />, label: "Dark Mode", path: "/page36" },
//     { icon: <ShieldUser />, label: "Security", path: "/pageu44" },
//     { icon: <ShieldAlert />, label: "Teams & Conditions", path: "/pageu39" },
//     { icon: <BadgeQuestionMark />, label: "Help Center", path: "/page_41" },
//     { icon: <Send />, label: "Invite Friends", path: "/pageu36" },
//     { icon: <LogOutIcon />, label: "Logout", path: "/pageu36" },
//   ];

//   return (
//     <div className="bg-gray-200 min-h-screen p-6 md:p-10">
//       <div className="max-w-lg bg-white mx-auto px-4 pb-6 rounded-2xl shadow-2xl shadow-gray-500">

//         {/* Profile image */}
//         <label>
//           <div className="cursor-pointer bg-gray-200 w-20 h-20 rounded-full relative mx-auto -top-8 shadow-md shadow-gray-400">
//             {/* <img src={profile} alt="Profile" /> */}
//             <div className="flex items-center justify-center h-7 w-9 bg-cyan-50 rounded-md absolute -right-1 bottom-1 shadow-md shadow-cyan-700/20">
//               <Image className="text-cyan-700 w-4 h-4" />
//             </div>
//             <input type="file" className="hidden" />
//           </div>
//         </label>

//         {/* Name & email */}
//         <div className="flex flex-col items-center mt-2">
//           <h2 className="font-bold text-xl">James S Hernandoz</h2>
//           <p className="text-sm text-gray-700">heranandz@gmail.com</p>
//         </div>

//         {/* Options */}
//         <div className="mt-4">
//           {profileOptions.map((item, index) => (
//             <ProfileOption key={index} {...item} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------------- Profile Option ---------------- */

// const ProfileOption = ({ icon, label, path, isLanguage }) => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const [language, setLanguage] = useState("English");

//   const handleClick = () => {
//     if (isLanguage) {
//       setOpen((prev) => !prev);
//     } else {
//       navigate(path);
//     }
//   };

//   return (
//     <div className="mt-4 md:px-6 lg:px-8 relative">
//       {/* Main row */}
//       <div
//         onClick={handleClick}
//         className="flex justify-between items-center cursor-pointer"
//       >
//         <div className="flex gap-4 items-center">
//           <span className="text-gray-500">{icon}</span>
//           <span className="text-sm">{label}</span>
//         </div>

//         <div className="flex items-center gap-2 text-gray-500">
//           {isLanguage && (
//             <span className="text-xs text-gray-600">{language}</span>
//           )}
//           <ChevronRight className={`transition ${open ? "rotate-90" : ""}`} />
//         </div>
//       </div>

//       {/* Language dropdown (FLOATING) */}
//       {isLanguage && open && (
//         <div
//           className="
//             absolute
//             right-0
//             top-full
//             mt-2
//             w-32
//             bg-gray-200
//             rounded-lg
//             shadow-md
//             z-20
//           "
//         >
//           {["English", "Malayalam"].map((lang) => (
//             <div
//               key={lang}
//               onClick={() => {
//                 setLanguage(lang);
//                 setOpen(false);
//               }}
//               className="px-3 py-2 text-xs hover:bg-gray-300 cursor-pointer"
//             >
//               {lang}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };



import React, { useState } from "react";
import {
  BellDot,
  ChevronRight,
  Eye,
  Image,
  Languages,
  ShieldAlert,
  ShieldUser,
  User,
  Wallet,
  BadgeQuestionMark,
  Send,
  LogOutIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const profileOptions = [
    { icon: <User size={22} />, label: "Edit Profile", path: "/pageu36" },
    { icon: <Wallet size={22} />, label: "Payment Option", path: "/payOption" },
    { icon: <BellDot size={22} />, label: "Notification", path: "/pageu40" },

    // Language dropdown
    { icon: <Languages size={22} />, label: "Language", isLanguage: true },

    { icon: <Eye size={22} />, label: "Dark Mode", path: "/page36" },
    { icon: <ShieldUser size={22} />, label: "Security", path: "/Page_44" },
    { icon: <ShieldAlert size={22} />, label: "Teams & Conditions", path: "/pageu39" },
    { icon: <BadgeQuestionMark size={22} />, label: "Help Center", path: "/Page_41" },
    { icon: <Send size={22} />, label: "Invite Friends", path: "/Page_48" },
    { icon: <LogOutIcon size={22} />, label: "Logout", path: "/pageu36" },
  ];

  return (
    <div className="bg-gray-200 min-h-screen p-6 md:p-10">
      <div className="max-w-lg bg-white mx-auto px-4 pb-6 rounded-2xl shadow-2xl shadow-gray-500">

        {/* Profile image */}
        <label>
          <div className="cursor-pointer bg-gray-200 w-20 h-20 rounded-full relative mx-auto -top-8 shadow-md shadow-gray-400 flex items-center justify-center">
            <User className="text-gray-500 w-8 h-8" />

            <div className="flex items-center justify-center h-7 w-9 bg-cyan-50 rounded-md absolute -right-1 bottom-1 shadow-md shadow-cyan-700/20">
              <Image className="text-cyan-700 w-4 h-4" />
            </div>

            <input type="file" className="hidden" />
          </div>
        </label>

        {/* Name & email */}
        <div className="flex flex-col items-center mt-2">
          <h2 className="font-bold text-xl">James S Hernandoz</h2>
          <p className="text-sm text-gray-700">heranandz@gmail.com</p>
        </div>

        {/* Options */}
        <div className="mt-6">
          {profileOptions.map((item, index) => (
            <ProfileOption key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Profile Option ---------------- */

const ProfileOption = ({ icon, label, path, isLanguage }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const handleClick = () => {
    if (isLanguage) {
      setOpen((prev) => !prev);
    } else {
      navigate(path);
    }
  };

  return (
    <div className="relative mt-4 px-2 md:px-6">

      {/* Main row */}
      <div
        onClick={handleClick}
        className="flex justify-between items-center cursor-pointer py-2"
      >
        <div className="flex gap-4 items-center">
          <span className="text-gray-500">{icon}</span>
          <span className="text-sm">{label}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          {isLanguage && (
            <span className="text-xs text-gray-600">{language}</span>
          )}
          <ChevronRight
            className={`transition-transform duration-200 ${open ? "rotate-90" : ""
              }`}
          />
        </div>
      </div>

      {/* Language dropdown */}
      {isLanguage && open && (
        <div className="absolute right-0 top-full mt-2 w-36 bg-gray-100 rounded-lg shadow-md z-20">
          {["English", "Malayalam"].map((lang) => (
            <div
              key={lang}
              onClick={() => {
                setLanguage(lang);
                setOpen(false);
              }}
              className="px-4 py-2 text-xs hover:bg-gray-200 cursor-pointer rounded-lg"
            >
              {lang}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
