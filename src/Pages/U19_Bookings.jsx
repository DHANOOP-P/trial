import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import BookIedtem from '../components/BookIedtem';
import ToolBox from '../components/ToolBox';
import TapRepairCard from '../components/TapRepairCard';

const U19Bookings = () => {
  const navigate = useNavigate();

  // const handleOpenRequest = () => {
  //   navigate('/U18_Request_Service');
  // };

  return (
    <div className="pb-6">

      <AppHeader 
        title="BOOKINGS"
        onBack={() => navigate(-1)}
        showFilter={true}
        showSearch={true}
      />

      <div className="px-3 md:px-4 mt-4 md:mt-6 cursor-pointer" /* onClick={handleOpenRequest} */>
     <div className="w-full lg:max-w-[1000px] mx-auto">
      <BookIedtem />
     </div>
    



      </div>

    <div className="px-3 md:px-4 mt-4 md:mt-6 cursor-pointer">
  <div className="w-full lg:max-w-[1000px] mx-auto">
    <TapRepairCard />
  </div>


  
</div>
 <ToolBox/>
    </div>
  );
};

export default U19Bookings;
