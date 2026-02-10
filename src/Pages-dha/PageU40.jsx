import React from 'react'
import Component4 from '../Components/Component4'
import Notifications from '../Components/Notifications'



export default function PageU40() {
  return (
    <div>
      <div className="block md:hidden">
        <Component4 title={"Notifications"} theme='black' />
      </div>

      <Notifications />
    </div>
  )
}
