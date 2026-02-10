import React from 'react'
import Component1 from '../Components/Component1'
import Component2 from '../Components/Component2'
import Component3 from '../Components/Component3'


function Page2() {
  return (
    <div className="w-full min-h-screen bg-gray-200   ">
      
      {/* Top Header */}
      <Component1 />
<div className='mt-15'>
      {/* Form Section */}
      <Component2 mode="signin" />
</div>
<div className='mt-8'>
      {/* Social / Continue With Section */}
      <Component3 />
</div>
    </div>
  )
}

export default Page2
