import React from "react";
import Component4 from "../components/Component";
import JobLists from "../components/JobList";
import BottomNavBar from "../components/BottomNavBar";
import { useNavigate } from "react-router-dom";

export default function PageU27() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-200 font-sans">
            <Component4 
                title={"Jobs"} 
                theme='black' 
                showFilter='true' 
                showSearch='true'
                onSearchClick={() => navigate("/pageM1")}
                onBackClick={() => navigate(-1)}    
            />
            <JobLists />
            < BottomNavBar />
        </div>
    )
}