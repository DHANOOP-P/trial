import React from 'react'
import AppHeader_4 from '../components/AppHeader_4';
import ChatContact_52 from '../components/ChatContact_52';
import ToolBar_21 from '../components/ToolBar_21';

const Page_45 = () => {
  return (
    <div className="h-screen flex flex-col bg-[#D9D9DB]">
      <AppHeader_4
        title="CHAT"
        theme="black"
        showBack
        showSearch
        showFilter
      />

      {/* Content area */}
      <div className="flex-1 ">
        <ChatContact_52 />
        <ToolBar_21/>
      </div>
    </div>)
}

export default Page_45;
