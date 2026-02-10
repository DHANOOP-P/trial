import React from 'react'
import { useNavigate } from 'react-router-dom'
import Component4 from '../Components-dha/Component4'
import Notifications from "../components/Notification"

export default function PageU40() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="block md:hidden">
        <Component4 title={"Notifications"} theme='black' onBack={() => navigate(-1)}/>
      </div>
      
      <Notifications/>
    </div>
  )
}
