import React from "react";
import { useNavigate } from "react-router-dom";
import Component4 from "../components/Component";
import ServiceRequest from "../components/ServiceRequest1";

export default function PageU28() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-200 font-sans">
            <Component4 
                title={"Service Details"} 
                theme='black'
                onBackClick={() => navigate("/page27")}
            />
            <ServiceRequest />
        </div>
    )
}