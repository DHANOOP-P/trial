import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaHeadphones
} from "react-icons/fa";

const contacts = [
  { label: "Customer Service", icon: <FaHeadphones /> },
  { label: "WhatsApp", icon: <FaWhatsapp /> },
  { label: "Facebook", icon: <FaFacebookF /> },
  { label: "Twitter", icon: <FaTwitter /> },
  { label: "Instagram", icon: <FaInstagram /> }
];

const ContactUs_51 = () => {
  return (
    <div className="px-6 py-8 flex justify-center">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
        {contacts.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
              {item.icon}
            </div>
            <p className="font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs_51;
