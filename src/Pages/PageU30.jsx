import React from "react";
import Component4 from "../components/Component";
import ComplaintItem from "../components/ComplaintItem";
import BottomNavBar from "../components/BottomNavBar";
import { useNavigate } from "react-router-dom";

export default function PageU30() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-200 font-sans">
            <Component4 
                title={"Complaints"} 
                theme='black' showFilter='true' 
                showSearch='true'
                onSearchClick={() => navigate("/pageM1")}
                onBackClick={() => navigate(-1)}
            />
            <ComplaintItem />
            <BottomNavBar />
        </div>
    )
}