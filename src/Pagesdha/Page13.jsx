import React from 'react'
import CategoryItem18 from "../components-dha/CategoryItem18";
import ToolBar21 from '../Components-dha/ToolBar21';
import Component4 from '../Components-dha/Component4';
import {Link} from "react-router-dom"
const Page13 = () => {
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
      <div className=' grid grid-cols-3 md:grid-cols-6  px-3 lg:px-20 md:gap-2 gap-5 lg:gap-9 md:flex justify-center'> 
          
        <Link to="/Page">
        <button >
          <CategoryItem18  image="/image11.png"
            tittle="Bouquet Delivery" />
        </button>
        </Link>

        <Link to="/Page15">
        <button >
          <CategoryItem18  image="/image12.png"
            tittle="Cake Delivery" />
         </button>
        </Link>
        
        <Link to="/Page">
        <button >
             <CategoryItem18 
            image="/image11.png"
            tittle="Drivers"
           />
         </button>
        </Link>

        <Link to="/Page">
        <button >
          <CategoryItem18  image="/image13.png"
            tittle="Packers & movers" />
         </button>
        </Link>

        <Link to="/Page">
        <button >
          <CategoryItem18  image="/image14.png"
            tittle="Pickup & elivery" />
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

export default Page13
