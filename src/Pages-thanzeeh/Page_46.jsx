// import React from 'react'
// import App_Header from '../components/App_Header'
// import Recieved_msg from '../components/Recieved_msg'
// import Send_msg from '../components/Send_msg'
// import Chat_Form from '../components/Chat_Form'
// import AppHeader_4 from '../components/AppHeader_4'

// const Page_46 = () => {
//     return (
//         <div className="relative h-screen">

//             {/* Fixed Header */}
//             <div className="fixed top-0 left-0 right-0 z-20 bg-white">
//                 {/* <AppHeader_4 /> */}
//                 <AppHeader_4
//                     title="messager name"
//                     theme="white"
//                     showBack
//                     showSearch
//                     // showFilter
//                 />
//             </div>

//             {/* Scrollable Messages */}
//             <div className="pt-14 pb-20 overflow-y-auto h-screen">
//                 <Recieved_msg />
//                 <Recieved_msg />
//                 <Send_msg />
//                 <Recieved_msg />
//                 <Send_msg />
//                 <Send_msg />

//             </div>

//             {/* Fixed Input */}
//             <div className="fixed bottom-0 left-0 right-0 z-20 bg-white">
//                 <Chat_Form />
//             </div>

//         </div>
//     )
// }

// export default Page_46;



// import React, { useState } from 'react'
// import AppHeader_4 from '../components/AppHeader_4'
// import Recieved_msg from '../components/Recieved_msg'
// import Send_msg from '../components/Send_msg'
// import Chat_Form from '../components/Chat_Form'

// const Page_46 = () => {
//   const [messages, setMessages] = useState([
//     { id: 1, text: "Hi bro 👋", sender: "other" },
//     { id: 2, text: "Good evening!", sender: "me" },
//   ])

//   const [input, setInput] = useState("")

//   const handleSend = () => {
//     if (!input.trim()) return

//     setMessages(prev => [
//       ...prev,
//       {
//         id: Date.now(),
//         text: input,
//         sender: "me",
//       },
//     ])

//     setInput("")
//   }

//   return (
//     <div className="relative h-screen bg-gray-100">

//       {/* Header */}
//       <div className="fixed top-0 left-0 right-0 z-20 bg-white">
//         <AppHeader_4
//           title="Messenger Name"
//           theme="white"
//           showBack
//           showSearch
//         />
//       </div>

//       {/* Messages */}
//       <div className="pt-14 pb-20 overflow-y-auto h-screen px-3">
//         {messages.map(msg =>
//           msg.sender === "me" ? (
//             <Send_msg key={msg.id} text={msg.text} />
//           ) : (
//             <Recieved_msg key={msg.id} text={msg.text} />
//           )
//         )}
//       </div>

//       {/* Chat Input */}
//       <div className="fixed bottom-0 left-0 right-0 z-20 bg-white">
//         <Chat_Form
//           input={input}
//           setInput={setInput}
//           onSend={handleSend}
//         />
//       </div>

//     </div>
//   )
// }

// export default Page_46




// import React, { useState, useRef, useEffect } from "react";
// import AppHeader_4 from "../components/AppHeader_4";
// import Recieved_msg from "../components/Recieved_msg";
// import Send_msg from "../components/Send_msg";
// import Chat_Form from "../components/Chat_Form";

// const Page_46 = () => {
//   const [messages, setMessages] = useState([
//     { id: 1, text: "Hi bro 👋", sender: "other" },
//     { id: 2, text: "Good evening!", sender: "me" },
//   ]);

//   const [input, setInput] = useState("");
//   const bottomRef = useRef(null);

//   const handleSend = () => {
//     if (!input.trim()) return;

//     setMessages((prev) => [
//       ...prev,
//       { id: Date.now(), text: input, sender: "me" },
//     ]);

//     setInput("");
//   };

//   // Auto scroll to bottom
//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <div className="relative h-screen bg-white">

//       {/* Header */}
//       <div className="fixed top-0 left-0 right-0 z-20 bg-white">
//         <AppHeader_4
//           title="Messenger Name"
//           theme="white"
//           showBack
//           showSearch
//         />
//       </div>

//       {/* Messages */}
//       <div className="pt-14 pb-24 overflow-y-auto h-screen px-3">
//         {messages.map((msg) =>
//           msg.sender === "me" ? (
//             <Send_msg key={msg.id} text={msg.text} />
//           ) : (
//             <Recieved_msg key={msg.id} text={msg.text} />
//           )
//         )}
//         <div ref={bottomRef} />
//       </div>

//       {/* Input */}
//       <div className="fixed bottom-0 left-0 right-0 z-20 bg-white">
//         <Chat_Form
//           input={input}
//           setInput={setInput}
//           onSend={handleSend}
//         />
//       </div>
//     </div>
//   );
// };

// export default Page_46;




import React, { useState } from 'react'
import AppHeader_4 from '../components/AppHeader_4'
import Recieved_msg from '../components/Recieved_msg'
import Send_msg from '../components/Send_msg'
import Chat_Form from '../components/Chat_Form'

const Page_46 = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [files, setFiles] = useState([])

  const handleSend = () => {
    if (!input.trim() && files.length === 0) return

    setMessages(prev => [
      ...prev,
      {
        type: 'sent',
        text: input,
        files: files,
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })
      }
    ])

    setInput('')
    setFiles([])
  }

  return (
    <div className="relative h-screen bg-white">

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-20 bg-white">
        <AppHeader_4 title="Virginia M. Patterson" showBack showSearch />
      </div>

      {/* Messages */}
      <div className="pt-16 pb-24 overflow-y-auto h-screen">
        <Recieved_msg text="Hi, Nicholas Good Evening 😊" time="10:45" />
        <Recieved_msg text="How was your UI/UX Design Course Like.?" time="12:45" />

        {messages.map((msg, i) => (
          <Send_msg key={i} msg={msg} />
        ))}
      </div>

      {/* Input */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-white">
        <Chat_Form
          input={input}
          setInput={setInput}
          files={files}
          setFiles={setFiles}
          onSend={handleSend}
        />
      </div>

    </div>
  )
}

export default Page_46;