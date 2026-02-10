import React from 'react'
import BottomNavBar from '../components/BottomNavBar'
import Chat from '../components/Chat'
import Component4 from '../Components-dha/Component4'

export default function PageU45() {
  return (
    <div>
      <Component4 title={"Chat"} theme='black' showSearch={true} />
      <Chat/>
      <BottomNavBar/>
    </div>
  )
}
