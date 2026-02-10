import React from "react";
import {
  ChevronRight,
  User,
  Bell,
  Lock,
  CreditCard,
  Globe,
  HelpCircle,
  LogOut
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import AppHeader_4 from "../components/AppHeader_4";
// import Component4 from "../Components-dha/Component4";

const settingsItems = [
  { label: "Account", icon: User, path: "/profile" },
  { label: "Notification", icon: Bell, path: "/Page_43" },
  { label: "Privacy", icon: Lock, path: "/privacy" },
  { label: "Payment", icon: CreditCard, path: "/U21_PAYMENT_METHODS" },
  { label: "Language", icon: Globe, path: "/page35" },
  { label: "Help", icon: HelpCircle, path: "/pageu41" },
  { label: "Logout", icon: LogOut, path: "/logout" },
];

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white md:bg-gray-200">
      <AppHeader_4 title="Settings" theme="black" />

      <div className="flex justify-center px-4 py-6">
        <div className="w-full md:max-w-md bg-white md:rounded-xl md:shadow-lg">
          {settingsItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                onClick={() => navigate(item.path)}
                className="
                  flex items-center justify-between
                  px-4 py-4
                  cursor-pointer
                  border-b last:border-b-0
                  hover:bg-gray-300
                  transition
                "
              >
                <div className="flex items-center gap-4">
                  <Icon className="w-5 h-5 text-gray-700" />
                  <span className="text-sm font-medium text-gray-900">
                    {item.label}
                  </span>
                </div>

                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Settings;
