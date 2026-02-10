import React, { useState } from 'react'
import Component4 from '../Components-dha/Component4'
import Comp10 from '../Components-dha/Comp10'
import Comp11 from '../Components-dha/Comp11'
import Comp12 from '../Components-dha/Comp12'
import Comp13 from '../Components-dha/Comp13'
import Comp14 from '../Components-dha/Comp14'
import ToolBar21 from '../Components-dha/ToolBar21'
import PageU37 from './PageU37'
// import PageU35 from './PageU35'
import PopularSirviceCard from '../Components-dha/PopularSirviceCard'

const page11 = () => {
    const [popup,setpopup]=useState()
    const [popup1,setpopup1]=useState()
  return (

    <div>
      {/* the popup left menu on the header */}

  {popup && (
        <div className="fixed inset-0 z-50 flex items-center ">
          
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setpopup(false)}
          />

          {/* Popup Content */}
          <div className="relative z-10 bg-white rounded-xl w-[100%] md:w-[30%]  p-0">
            <PageU37 onClose={() => setpopup(false)} />
          </div>
        </div>
      )}
      {popup1 && (
  <div className="fixed inset-0 z-50 flex items-center justify-end">
    
    {/* Overlay */}
    <div
      className="absolute inset-0 bg-black/50"
      onClick={() => setpopup1(false)}
    />

    {/* Popup Content */}
    <div className="relative z-10 bg-white rounded-xl w-full md:w-[30%] h-full md:h-auto">
      {/* <PageU35 onClose={() => setpopup1(false)} /> */}
    </div>
  </div>
)}
       {/*Header  */}
       <div>
      <Component4
  pop={() => setpopup(true)}
  pop1={() => setpopup1(true)}
  theme="black"
  title="SERVICE CONNECT"
  shownotification={true}
  showprofil={true}
  showBack={false}
  showMenubar={true}
/>

       </div>
     
{/* complete section */}
<div className='w-full flex justify-between'>
  {/* left section */}
 <div className='hidden lg:block w-[15%] bg-black'>
    <PageU37/>
 </div>
  {/* middle section */}
   <div className='lg:w-[70%] w-full'>
       <div className=''>
         <Comp10 />
       </div>

       <div>
         <Comp11/>
       </div>
       
        <div>
            <Comp12/>
        </div>
        <div>
            <Comp13/>
        </div>
        <div>
            <Comp14/>
        </div>
        <div>
            <ToolBar21/>
        </div>
     </div>
 {/* rightsection */}
     <div className='hidden lg:block w-[15%]  backdrop-blur-xl bg-gradient-to-t from-black to-gray-500  flex-col pl-8 '>
           <h3 className='text-white mt-4'>Ads</h3>
           <PopularSirviceCard/>  
            <PopularSirviceCard/>  
             <PopularSirviceCard/>  
     </div>
   </div>
    </div>
  )
}

export default page11
