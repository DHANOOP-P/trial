import React, { useState } from 'react'
import UserProfileMenuBar_47 from "../components/UserProfileMenuBar_47";


const Page_37 = () => {
    const [showProfile, setShowProfile] = useState(false);

    return (

        <div className="min-h-screen bg-gray-100 relative overflow-hidden">

            {/* Header */}
            <header className="h-14 bg-white shadow flex items-center justify-between px-4">
                <h1 className="font-semibold text-lg">Dashboard</h1>

                <button
                    onClick={() => setShowProfile(true)}
                    className="px-3 py-1.5 rounded-md bg-black text-white text-sm
                     hover:bg-gray-800 transition"
                >
                    Open Profile
                </button>
            </header>


            {/* Profile Menu Drawer */}
            <UserProfileMenuBar_47
                show={showProfile}
                setShow={setShowProfile}
            />
        </div>
    )
}

export default Page_37;