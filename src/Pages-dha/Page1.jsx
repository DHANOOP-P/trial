import React from 'react'
import Component1 from '../Components/Component1'
import Component2 from '../Components/Component2'
import Component3 from '../Components/Component3'

function Page1() {
  return (
    <div className='w-full min-h-screen bg-gray-200 '>
      <Component1/>
      <Component2 mode='signup' />
      <Component3/>
    </div>
  )
}

export default Page1
