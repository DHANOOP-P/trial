import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Component4 from "../Components-dha/Component4";


export default function PageU41() {
  
  return (
    <div className="min-h-screen bg-gray-200">
      <Component4 title="Help Center" theme="black"  />

      {/* Tabs */}
      <div className="flex w-full bg-white">
        <NavLink
          to="/pageu41"
          end
          className={({ isActive }) =>
            `w-full text-center py-3 font-semibold border-b-2 transition
            ${
              isActive
                ? "bg-gray-300 border-gray-700 text-black"
                : "border-transparent text-gray-500"
            }`
          }
        >
          FAQ
        </NavLink>

        <NavLink
          to="/pageu41/contact"
          className={({ isActive }) =>
            `w-full text-center py-3 font-semibold border-b-2 transition
            ${
              isActive
                ? "bg-gray-300 border-gray-700 text-black"
                : "border-transparent text-gray-500"
            }`
          }
        >
          CONTACT US
        </NavLink>
      </div>

      {/* Tab Content */}
      <Outlet />
    </div>
  );
}
