import React from "react";
import { useNavigate } from "react-router-dom";
import Component4 from "../components/Component";
import ServiceRequestDetails from "../components/ServiceRequestDetails";

export default function PageU29() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-200 font-sans">
            <Component4 
                title={"Complaint Form"} 
                theme='black'
                onBackClick={() => navigate("/page28")}
            />
            <ServiceRequestDetails />
        </div>
    )
}