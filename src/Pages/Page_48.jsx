import React from 'react'
import AppHeader_4 from '../components/AppHeader_4';
import InvitationList_68 from '../components/invitationList_68';

const Page_48 = () => {
    return (
        <div className="h-screen flex flex-col bg-gray-300">
            <AppHeader_4
                title="INVITE FRIEND"
                theme="black"
                showBack
                showFilter
                showSearch
            />

            {/* Content area */}
            <div className="flex-1 ">
                <InvitationList_68 />

            </div>
        </div>)
}

export default Page_48;