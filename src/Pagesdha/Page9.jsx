import React from 'react'
import Component8 from '../Components/Component8'
import Component4 from '../Components/Component4'

const Page9 = () => {
  return (
    <div className=''>
       <div>
         <Component4 theme='black'
           title="FORGET PASSWORD"/>
       </div>
       <div className='w-full'>
    <Component8
  heading="Create Your New Password"
  buttonText="Update Password"
  inputs={[
    { type: "password", placeholder: "Password" },
    { type: "password", placeholder: "Confirm Password" }
  ]}
/>


       </div>
    </div>
  )
}

export default Page9
