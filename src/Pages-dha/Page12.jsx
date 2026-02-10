import React from 'react'
import CategoryItem18 from "../components-dha/CategoryItem18";
import ToolBar21 from '../Components-dha/ToolBar21';
import Component4 from '../Components-dha/Component4';
import {Link} from "react-router-dom"
const Page12 = () => {
  return (
    <div className='flex items-center justify-center flex-col w-full '>
     {/* header */}
      <div className='w-full'>
          <Component4 title="ALL CATEGORY"
                       showSearch={true}
                       showFilter={true}
                       theme='black'/>
      </div>
      {/* body */}
      <div className=' grid grid-cols-3 md:grid-cols-6 px-2 sm:px-5 lg:px-10 md:px-2 gap-2 '> 
         
         
          <div className=''>
          <CategoryItem18 
            image="/menu.png"
            tittle="ALL"
           />
           </div>
            
           
         <Link to="/Page13">
         <button >
          <CategoryItem18  image="/image1.png"
            tittle="Delivery sirvices" />
            </button>
            </Link>
          

              <Link to="/Page">
         <button >
          <CategoryItem18  image="/image2.png"
            tittle="Home Appliences Repair" />
           </button>
            </Link>

              <Link to="/Page">
         <button >
          <CategoryItem18  image="/image3.png"
            tittle="Laundry sirvice" />
           </button>
            </Link>
              <Link to="/Page">
         <button >
          <CategoryItem18  image="/image6.png"
            tittle="Buisiness sirvice" />
           </button>
            </Link>
              <Link to="/Page">
         <button >
          <CategoryItem18  image="/image9.png"
            tittle="Events & parties" />
          </button>
            </Link>
             <Link to="/Page">
         <button >
          <CategoryItem18   image="/image4.png"
            tittle="Cleaning sirvices"/>
           </button>
            </Link>
            <Link to="/Page">
         <button >
          <CategoryItem18  image="/image7.png"
            tittle="Electronics repair" />
          </button>
            </Link>
               <Link to="/Page">
         <button >
          <CategoryItem18  image="/image10.png"
            tittle="Technology Sirvices" />
           </button>
            </Link>
               <Link to="/Page">
         <button >
          <CategoryItem18  image="/image5.png"
            tittle="Health & Fitness" />
           </button>
            </Link>
               <Link to="/Page">
         <button >
          <CategoryItem18  image="/image8.png"
            tittle="Beauty Sirvices" />
           </button>
            </Link>
           
       </div>
       {/* footer */}
        <div>
        <ToolBar21/>
        </div>
    </div>
  )
}

export default Page12
