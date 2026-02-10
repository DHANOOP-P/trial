import React from 'react'
import Component4 from '../components/fourth'
import Component5 from '../components/fifth'

function Page7() {
  return (
    <div className='w-full min-h-screen bg-gray-200'>
      <Component4 title={"FORGOT PASSWORD"} theme='black'/>
      <Component5 flow="reset"/>
    </div>
  )
}

export default Page7
