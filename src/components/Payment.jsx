import { ChevronLeft, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

export default function PaymentOptions() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">

      {/* Content */}
      <div className="px-5 pt-6 pb-24 w-[40%] mx-auto">

        {/* Service Card */}
        <div className="bg-white rounded-xl p-4 flex gap-4 shadow-sm">
          <div className="w-14 h-14 bg-black rounded-lg" />
          <div>
            <p className="text-xs text-orange-500 font-semibold">
              Graphic Design
            </p>
            <p className="text-sm font-semibold text-gray-800">
              Setup your Graphic Design..
            </p>
          </div>
        </div>

        {/* Section Title */}
        <p className="text-xs text-gray-500 mt-6 mb-3 text-center">
          Select the Payment Methods you Want to Use
        </p>

        {/* Payment Methods */}
        <div className="space-y-3">

          {/* Paypal */}
          <label className="bg-white rounded-lg px-4 py-3 flex items-center justify-between shadow-sm cursor-pointer">
            <span className="text-sm text-gray-700">Paypal</span>
            <input
              type="radio"
              name="payment"
              className="accent-gray-800"
            />
          </label>

          {/* Google Pay */}
          <label className="bg-white rounded-lg px-4 py-3 flex items-center justify-between shadow-sm cursor-pointer">
            <span className="text-sm text-gray-700">Google Pay</span>
            <input
              type="radio"
              name="payment"
              className="accent-gray-800"
            />
          </label>

          {/* Cash on Delivery */}
          <label className="bg-white rounded-lg px-4 py-3 flex items-center justify-between shadow-sm cursor-pointer">
            <span className="text-sm text-gray-700">Cash on Delivery</span>
            <input
              type="radio"
              name="payment"
              className="accent-gray-800"
            />
          </label>

        </div>
      </div>

      {/* Bottom Button */}
      <div className="px-5">
        <Link to="/page31">
        <button className="w-[25%] mx-auto bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-full flex items-center justify-center gap-3 shadow-lg">
          PAY RS 75
          <span className="bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center">
            <ArrowRight/>
          </span>
        </button></Link>
      </div>

    </div>
  );
}
