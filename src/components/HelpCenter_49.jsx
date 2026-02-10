import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Faq_50 from "./Faq_50";
import ContactUs_51 from "./ContactUs_51";

const HelpCenter_49 = () => {
  const location = useLocation();

  const isFAQ = location.pathname === "/pageu41";
  const isContact = location.pathname === "/pageu42";

  return (
    <div className="min-h-screen min-w-full bg-gray-200">
      <div className="w-full">

        {/* TOP BUTTONS */}
        <div className="flex w-full">
          <NavLink
            to="/pageu41"
            className={`w-full text-center py-3 text-sm md:text-base  font-semibold border-b-2 transition
              ${
                isFAQ
                  ? "bg-gray-300 border-gray-600 text-black"
                  : "bg-white border-transparent text-gray-600"
              }`}
          >
            FAQ
          </NavLink>

          <NavLink
            to="/pageu42"
            className={`w-full text-center py-3 text-sm md:text-base lg:text-lg font-semibold border-b-2 transition
              ${
                isContact
                  ? "bg-gray-300 border-gray-600 text-black"
                  : "bg-white border-transparent text-gray-600"
              }`}
          >
            CONTACT US
          </NavLink>
        </div>

        {/* CONTENT AREA */}
        <div className="mt-4">
          {isFAQ && <Faq_50 />}
          {isContact && <ContactUs_51 />}
        </div>

      </div>
    </div>
  );
};

export default HelpCenter_49;
