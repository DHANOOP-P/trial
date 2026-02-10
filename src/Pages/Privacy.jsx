import React, { useState } from "react";
import Component4 from "../Components-dha/Component4";

const Privacy = () => {
  const [settings, setSettings] = useState({
    profileVisible: true,
    activityVisible: true,
    dataSharing: false
  });

  return (
    <div className="min-h-screen bg-white md:bg-gray-200">
      <Component4 title="Privacy" theme="black" />

      <div className="px-4 py-6 space-y-6 max-w-md mx-auto">

        {/* Privacy Controls */}
        <div className="bg-white rounded-xl shadow p-4 space-y-4">
          <h3 className="text-sm font-semibold text-gray-900">
            Privacy Controls
          </h3>

          {[
            { label: "Profile Visibility", key: "profileVisible" },
            { label: "Activity Visibility", key: "activityVisible" },
            { label: "Data Sharing", key: "dataSharing" }
          ].map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between"
            >
              <span className="text-sm text-gray-700">
                {item.label}
              </span>

              <input
                type="checkbox"
                checked={settings[item.key]}
                onChange={() =>
                  setSettings({
                    ...settings,
                    [item.key]: !settings[item.key]
                  })
                }
                className="w-5 h-5 accent-black"
              />
            </div>
          ))}
        </div>

        {/* Data & Security */}
        <div className="bg-white rounded-xl shadow p-4 space-y-3">
          <h3 className="text-sm font-semibold text-gray-900">
            Data & Security
          </h3>

          <p className="text-xs text-gray-600">
            Your data is encrypted and securely stored. We never sell your
            personal information to third parties.
          </p>

          <button className="text-sm font-medium text-black">
            View Privacy Policy
          </button>
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-xl shadow p-4 space-y-3">
          <h3 className="text-sm font-semibold text-red-600">
            Danger Zone
          </h3>

          <button className="text-sm font-medium text-red-600">
            Delete My Account
          </button>
        </div>

      </div>
    </div>
  );
};

export default Privacy;
