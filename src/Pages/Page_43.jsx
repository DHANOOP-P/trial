import React from 'react'
 import AppHeader_4 from '../components/AppHeader_4';
import NotificationSettings110 from '../components/NotificationSettings110';

const Page_43 = () => {
    return (
        <div className="h-screen flex flex-col bg-[#FFFFFF]">
            <AppHeader_4
                title="NOTIFICATIONS SETTINGS"
                theme="black"
                showBack 
            />

            {/* Content area */}
            <div className="flex-1">
                <NotificationSettings110/>
            </div>
        </div>
        )
}

export default Page_43;