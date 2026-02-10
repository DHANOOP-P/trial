import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Original Page Imports
import U18_Request_Service from './Pages/U18_Request_Service';
import U17_PROVIDER_PROFILE from './Pages/U17_PROVIDER_PROFILE';
import U19Bookings from './Pages/U19_Bookings';
import U20_Booking_Details from './Pages/U20_Booking_Details';
import U21_PAYMENT_METHODS from './Pages/U21_PAYMENT_METHODS';
import U21_B_ADD_NEW_CARD from './Pages/U21_B_ADD_NEW_CARD';
import U22PaymentSuccessMessage from './Pages/U22_PAYMENT_SUCCESS_MESSAGE';
import U23EReceipt from './Pages/U23_E_RECEIPT';

// New Component Imports
import Component1 from "./components/first";
import Component2 from "./components/second";
import Component3 from "./components/third";
import Componentu from "./components/third1";
import Component4 from "./components/fourth";
import Component5 from "./components/fifth";
import Component7 from "./components/sixth";
import Component8 from "./components/eighth";
import Comp9 from "./components/ninth";
import Comp10 from "./components/10th";
import Comp11 from "./components/11th";
import Comp12 from "./components/12th";
import Comp13 from "./components/13th";
import Comp14 from "./components/14th";
import Comp15 from "./components/15th";
import Diva from "./components/Diva";
import Comp6 from "./components/seventh";

// New Page Imports
import Page1 from "./Pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6 from "./Pages/Page6";
import Page7 from "./Pages/Page7";
import Page8 from "./Pages/Page8";
import Sucess from "./Pages/Sucess";

// New "Pages-dha" Imports
import Page11 from "./Pages-dha/Page11";
import Page12 from "./Pages-dha/Page12";
import Page13 from "./Pages-dha/Page13";
import Page14 from "./Pages-dha/Page14";
import Page15 from "./Pages-dha/Page15";
import Page16 from "./Pages-dha/Page16";
import Page17 from "./Pages-dha/SirviceprovidersPage";
import Page18 from "./Pages-dha/SirvicesPage";

// New Pages by Abhishek
import PageU24 from './Pages/PageU24.jsx';
import PageU25 from './Pages/PageU25.jsx';
import PageU26 from './Pages/PageU26.jsx';
import PageU27 from './Pages/PageU27.jsx';
import PageU28 from './Pages/PageU28.jsx';
import PageU29 from './Pages/PageU29.jsx';
import PageU30 from './Pages/PageU30.jsx';
import PageU31 from './Pages/PageU31.jsx';
import PageMU1 from './Pages/PageMU1.jsx';
import PageU32 from './Pages/PageU32.jsx';
import PageU33 from './Pages/PageU33.jsx';
import PageU37 from './Pages/PageU37.jsx';
import PageM14 from './Pages/PageM14.jsx'
import PageU36 from './Pages/PageU36.jsx';
import PageU40 from './Pages/PageU40.jsx';
import PageU44 from './Pages/PageU44.jsx';
import PageU39 from './Pages/PageU39.jsx';
import PageU41 from './Pages/PageU41.jsx';
import PageU48 from './Pages/PageU48.jsx';
import Logout from './Pages/Logout.jsx';
import Faq_50 from './components/Faq_50.jsx';
import ContactUs_51 from './components/ContactUs_51.jsx';
import PageU35 from './Pages-dha/pageU35.jsx';
import Profile from './Pages/Profile.jsx';
import Settings from './Pages/Settings.jsx';
import History from './Pages/History.jsx';
import PageU45 from './Pages/PageU45.jsx';
import PageU43 from './Pages/PageU43.jsx';
import Privacy from './Pages/Privacy.jsx';
import PageU38 from './Pages/PageU38.jsx';


// New Pages by thanzeeh 
// import Page_U37 from './Pages-thanzeeh/Page_U37.jsx';
//  import Page_35 from './Pages-thanzeeh/Page_35.jsx';
// import Page_U37 from './Pages-thanzeeh/Page_37.jsx';
// import Settings from './Pages-thanzeeh/Settings.jsx';

import Page_45 from './Pages-thanzeeh/Page_45.jsx';
import Page_35 from './Pages-thanzeeh/Page_35.jsx';
import Page_41 from './Pages-thanzeeh/Page_41.jsx';
import Page_43 from './Pages-thanzeeh/Page_43.jsx';
import Page_44 from './Pages-thanzeeh/Page_44.jsx';
import Page_46 from './Pages-thanzeeh/Page_46.jsx';
import Page_48 from './Pages-thanzeeh/Page_48.jsx';
import Page_37 from './Pages-thanzeeh/Page_37.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* Original Routes */}
          <Route path="/U18_Request_Service" element={<U18_Request_Service />} />
          <Route path="/U17_PROVIDER_PROFILE/*" element={<U17_PROVIDER_PROFILE />} />
          <Route path="/U19Bookings/*" element={<U19Bookings />} />
          <Route path="/U20_Booking_Details/*" element={<U20_Booking_Details />} />
          <Route path="/U21_PAYMENT_METHODS/*" element={<U21_PAYMENT_METHODS />} />
          <Route path="/U21_B_ADD_NEW_CARD/*" element={<U21_B_ADD_NEW_CARD />} />
          <Route path="/U22PaymentSuccessMessage/*" element={<U22PaymentSuccessMessage />} />
          <Route path="/U23EReceipt/*" element={<U23EReceipt />} />

          {/* New Component Routes */}
          <Route path="/comp-1" element={<Component1 />} />
          <Route path="/comp-2" element={<Component2 />} />
          <Route path="/comp-3" element={<Component3 />} />
          <Route path="/comp-u" element={<Componentu />} />
          <Route path="/comp-4" element={
            <Component4
              title="My Header"
              showBack={true}
              showSearch={true}
              showPhone={true}
              showFilter={true}
              showMenu={true}
              theme="black"
            />
          } />
          <Route path="/comp-5" element={<Component5 />} />
          <Route path="/comp-7" element={<Component7 />} />
          <Route path="/comp-6" element={<Comp6 />} />
          <Route path="/comp-8" element={<Component8 />} />
          <Route path="/comp-9" element={<Comp9 open={true} />} />
          <Route path="/comp-10" element={<Comp10 />} />
          <Route path="/comp-11" element={<Comp11 />} />
          <Route path="/comp-12" element={<Comp12 />} />
          <Route path="/comp-13" element={<Comp13 />} />
          <Route path="/comp-14" element={<Comp14 />} />
          <Route path="/comp-15" element={<Comp15 />} />
          <Route path="/div" element={<Diva />} />

          {/* New Page Routes */}
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
          <Route path="/page7" element={<Page7 />} />
          <Route path="/page8" element={<Page8 />} />
          <Route path="/sucess" element={<Sucess />} />
          <Route path="/page11" element={<Page11 />} />
          <Route path="/page12" element={<Page12 />} />
          <Route path="/page13" element={<Page13 />} />
          <Route path="/page14" element={<Page14 />} />
          <Route path="/page15" element={<Page15 />} />
          <Route path="/page16" element={<Page16 />} />
          <Route path="/SirviceProvidersPage" element={<Page17 />} />
          <Route path="/SirvicesPage" element={<Page18 />} />

          {/* New Pages Routes by Abhishek */}
          <Route path="/page24" element={<PageU24 />} />
          <Route path="/pageM1" element={<PageM14 />} />
          <Route path="/page25" element={<PageU25 />} />
          <Route path="/page26" element={<PageU26 />} />
          <Route path="/page27" element={<PageU27 />} />
          <Route path="/page28" element={<PageU28 />} />
          <Route path="/page29" element={<PageU29 />} />
          <Route path="/page30" element={<PageU30 />} />
          <Route path="/page31" element={<PageU31 />} />
          <Route path="/page32" element={<PageMU1 />} />
          <Route path="/pageM32" element={<PageU32 />} />
          <Route path="/pageM33" element={<PageU33 />} />
          <Route path="/pageM37" element={<PageU37 />} />

          {/*---------- U32-U40 by Abiya----------------- */}
          <Route path="/pageu36" element={<PageU36 />} />
          <Route path="/pageu40" element={<PageU40 />} />
          <Route path="/pageu44" element={<PageU44 />} />
          <Route path="/pageu39" element={<PageU39 />} />
          <Route path="/pageu41" element={<PageU41 />}>
            <Route index element={<Faq_50 />} />
            <Route path="faq" element={<Faq_50 />} />
            <Route path="contact" element={<ContactUs_51 />} />
          </Route>
          <Route path="/pageu48" element={<PageU48 />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/history" element={<History />} />
          <Route path="/pageu45" element={<PageU45 />} />
          <Route path="/pageu43" element={<PageU43 />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/pageu38" element={<PageU38 />} />


          {/*----------------------- thanzeeh pages u41-u48--------------------------------  */}
          <Route path='/Page_37' element={<Page_37 />} />
          <Route path='/Settings' element={<Settings />} />
          <Route path='/Page_45' element={<Page_45 />} />


          <Route path='/Page_35' element={<Page_35 />} />
          <Route path='/Page_41' element={<Page_41 />} />
          <Route path='/Page_43' element={<Page_43 />} />

          <Route path='/Page_44' element={<Page_44 />} />
          <Route path='/Page_46' element={<Page_46 />} />

          <Route path='/Page_48' element={<Page_48 />} />



        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;