import React from "react";
import { useNavigate } from "react-router-dom";
import Component4 from "../components/Component";
import ReviewForm from "../components/ReviewForm";

export default function PageU25() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-200 font-sans">
            <Component4 
                title={"Review"} 
                theme='black'
                onBackClick={() => navigate("/page26")}
            />
            <ReviewForm />
        </div>
    )
}