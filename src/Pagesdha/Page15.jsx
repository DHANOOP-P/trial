import React, { useState } from "react";
import Component4 from "../Components-dha/Component4";
import ToolBar21 from "../Components-dha/ToolBar21";
import RequestItem20 from "../Components-dha/RequestItem20";
import { MapPin, Pencil, X } from "lucide-react";
import {Link} from "react-router-dom"
const Page15 = () => {
  const [active, setActive] = useState("Near By");

  // 🔑 missing states (FIX)
  const [editLocation, setEditLocation] = useState(false);
  const [location, setLocation] = useState("");

  const options = ["Near By", "10 KM", "All"];

  return (
    <div className="">
      {/* Header */}
      <Component4
        theme="black"
        title="CAKE DELIVERY"
        showFilter={true}
        showSearch={true}
      />

      {/* Filter & Location */}
      <div className="w-[95%] md:w-[70%]  mx-auto space-y-2 mt-4">

        {/* Location Row */}
        <div className="flex items-center gap-2 text-gray-700 text-sm">
       <Link to="/page4">
        <button>
          <MapPin size={16} />
        </button>
        </Link> 

          {!editLocation ? (
            <>
              <span className="font-medium">LOCATION</span>
              <button onClick={() => setEditLocation(true)}>
                <Pencil size={14} className="cursor-pointer text-gray-500" />
              </button>
            </>
          ) : (
            <div className="flex items-center gap-2 w-full">
              <input
                type="text"
                placeholder="Search location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1 px-3 py-1.5 rounded-md border text-sm outline-none"
              />
              <button onClick={() => setEditLocation(false)}>
                <X size={16} className="text-gray-500" />
              </button>
            </div>
          )}
        </div>

        {/* Open Request Button */}
        <Link to="/U18_Request_Service">
        <button className="w-full bg-[#2b2b2b] text-white py-3 rounded-full text-sm font-medium shadow mb-1">
          Open Request (Request to Random Accounts)
        </button>
        </Link>

        {/* Filter Tabs */}
        <div className="flex bg-white rounded-full shadow p-1">
          {options.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`flex-1 py-2 text-sm rounded-full transition-all
                ${
                  active === item
                    ? "bg-[#2b2b2b] text-white"
                    : "text-gray-600"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
   
{/* Body */}

<div className="flex justify-center">
  <div className="grid md:grid-cols-2 md:w-[70%] w-[95%] gap-4">
    
    <Link to="/U18_Request_Service">

      <RequestItem20 />

    </Link>

    <Link to="/U18_Request_Service">

      <RequestItem20 />

    </Link>

    <Link to="/U18_Request_Service">

      <RequestItem20 />

    </Link>
    
  </div>
</div>










      {/* Footer */}
      <ToolBar21 />
    </div>
  );
};

export default Page15;
