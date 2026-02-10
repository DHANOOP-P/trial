import React from 'react'
import AppHeader_4 from '../components/AppHeader_4'
import SecuritySettings_111 from '../components/SecuritySettings_111'

const Page_44 = () => {
    return (
        <div className="h-screen flex flex-col bg-[#FFFFFF]">
            <AppHeader_4
                title="SECURITY"
                theme="black"
                showBack
            />

            {/* Content area */}
            <div className="flex-1">
                <SecuritySettings_111 />
            </div>
        </div>
    )
}

export default Page_44