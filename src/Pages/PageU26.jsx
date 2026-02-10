import React from "react";
import { useNavigate } from "react-router-dom";
import Component4 from "../components/Component";
import ReviewList from "../components/ReviewList";

export default function PageU26() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-200 font-sans">
            <Component4 
                title={"Reviews"} 
                theme='black'
                onBackClick={() => navigate("/U17_PROVIDER_PROFILE")}
            />
            <ReviewList />
        </div>
    )
}