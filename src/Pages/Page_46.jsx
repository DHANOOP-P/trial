import React from 'react'
import App_Header from '../components/App_Header'
import Recieved_msg from '../components/Recieved_msg'
import Send_msg from '../components/Send_msg'
import Chat_Form from '../components/Chat_Form'
import AppHeader_4 from '../components/AppHeader_4'

const Page_46 = () => {
    return (
        <div className="relative h-screen">

            {/* Fixed Header */}
            <div className="fixed top-0 left-0 right-0 z-20 bg-white">
                {/* <AppHeader_4 /> */}
                <AppHeader_4
                    title="messager name"
                    theme="white"
                    showBack
                    showSearch
                    // showFilter
                />
            </div>

            {/* Scrollable Messages */}
            <div className="pt-14 pb-20 overflow-y-auto h-screen">
                <Recieved_msg />
                <Recieved_msg />
                <Send_msg />
                <Recieved_msg />
                <Send_msg />
                <Send_msg />

            </div>

            {/* Fixed Input */}
            <div className="fixed bottom-0 left-0 right-0 z-20 bg-white">
                <Chat_Form />
            </div>

        </div>
    )
}

export default Page_46;