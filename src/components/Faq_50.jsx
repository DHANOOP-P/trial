import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const categories = ["General", "Account", "Payment", "Service"];

const Faqs = {
 General: [ 
    { 
        q: "How do I manage my notifications?",
        a: "To manage notifications, go to Settings, select Notification Settings, and customize your preferences."
    }, 
    { 
        q: "How do I start a guided meditation session?", 
        a: "Navigate to the meditation section and choose a guided session." 
    }, 
    { 
        q: "How do I join a support group?", 
        a: "Visit the community tab and select available support groups." 
    }, 
    { 
        q: "Is my data safe and private?",
         a: "Yes, your data is encrypted and securely stored." 
    } ], 
    Account: [ 
        { q: "How do I update my profile?", a: "Go to profile settings to update your information." }, { q: "How do I change my password?", a: "Go to security settings and update your password." }, { q: "How do I delete my account?", a: "Contact support to request account deletion." } 
    ],
     Payment: [ 
        { q: "How do I add a payment method?", a: "Go to billing settings and add a new payment method." }, { q: "Is my payment information secure?", a: "Yes, all payments are processed securely." }, { q: "Can I get a refund?", a: "Refunds are processed based on our refund policy." } 
    ], 
    Service: [ 
        { q: "How do I manage my notifications?", a: "To manage notifications, go to Settings, select Notification Settings, and customize your preferences." }, { q: "How do I start a guided meditation session?", a: "Navigate to the meditation section and choose a guided session." }, { q: "How do I join a support group?", a: "Visit the community tab and select available support groups." }, { q: "Is my data safe and private?", a: "Yes, your data is encrypted and securely stored." } 
    ] 
};

const Faq_50 = () => {
  const [activeTab, setActiveTab] = useState("General");
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="px-6 py-8 flex justify-center">
      <div className="w-full max-w-5xl">

        {/* Category Pills */}
        <div className="flex gap-3 mb-6 justify-center overflow-x-auto">
          {categories.map(tab => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(null);
              }}
              className={`px-5 py-1 rounded-full text-sm font-medium shadow
              ${activeTab === tab ? "bg-black text-white" : "bg-white text-gray-600"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Faqs[activeTab].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow"
            >
              <button
                className="w-full flex justify-between items-center"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`transition ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>

              {openIndex === index && (
                <p className="mt-3 text-gray-500">{item.a}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Faq_50;
