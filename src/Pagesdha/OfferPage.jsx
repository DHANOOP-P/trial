import React from 'react'

import Component4 from '../Components/Component4'

const offers = [
  { title: "Cake delivery", discount: "25% OFF", desc: "Valid today only" },
  { title: "electrician", discount: "30% OFF", desc: "Limited time" },
  { title: "Cleaning sirvice", discount: "20% OFF", desc: "Hot deal" },
  { title: "electronics sirvice", discount: "20% OFF", desc: "Hot deal" },
  { title: "Laundry sirvice", discount: "20% OFF", desc: "Hot deal" },

];

const OfferPage = () => {
  return (
    <div className="w-full h-screen">
      <div className='w-full'>

        <Component4 title="ALL sirvices Providers"
          showSearch={true}
          //  showFilter={true}
          theme='black' />
      </div>
      <div className="  p-4">
        <h1 className="text-3xl text-center font-bold mb-6">Available Offers</h1>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-[#2b2e35] text-white p-5 rounded-xl shadow"
            >
              <span className="text-sm text-yellow-400 font-bold">
                {offer.discount}
              </span>
              <h2 className="text-lg font-semibold mt-2">
                {offer.title}
              </h2>
              <p className="text-sm text-gray-300 mt-1">
                {offer.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
