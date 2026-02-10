import React from "react";
import { useNavigate } from "react-router-dom";
import Component4 from "../components/Component";
import Search1 from "../components/Search";


export default function PageU31() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-200 font-sans">
            <Component4 
                title={"Search"} 
                theme='black'
                onBackClick={() => navigate("/page27")}
                />
            <Search1 />
        </div>
    )
}