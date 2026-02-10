import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ---------------- Original Pages ---------------- */
import U18_Request_Service from "./Pages/U18_Request_Service";
import U17_PROVIDER_PROFILE from "./Pages/U17_PROVIDER_PROFILE";
import U19Bookings from "./Pages/U19_Bookings";
import U20_Booking_Details from "./Pages/U20_Booking_Details";
import U21_PAYMENT_METHODS from "./Pages/U21_PAYMENT_METHODS";
import U21_B_ADD_NEW_CARD from "./Pages/U21_B_ADD_NEW_CARD";
import U22PaymentSuccessMessage from "./Pages/U22_PAYMENT_SUCCESS_MESSAGE";
import U23EReceipt from "./Pages/U23_E_RECEIPT";

/* ---------------- Components ---------------- */
import Component1 from "./components/first";
import Component2 from "./components/second";
import Component3 from "./components/third";
import Componentu from "./components/third1";
import Component4 from "./components/fourth";
import Component5 from "./components/fifth";
import Component6 from "./components/seventh";
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
import Faq_50 from "./components/Faq_50.jsx";
import ContactUs_51 from "./components/ContactUs_51.jsx";

/* ---------------- Main Pages ---------------- */
import Page1 from "./Pages/Page1.jsx";
import Page2 from "./Pages/Page2.jsx";
import Page3 from "./Pages/Page3.jsx";
import Page4 from "./Pages/Page4.jsx";
import Page5 from "./Pages/Page5.jsx";
import Page6 from "./Pages/Page6.jsx";
import Page7 from "./Pages/Page7.jsx";
import Page8 from "./Pages/Page8.jsx";
import Sucess from "./Pages/Sucess.jsx";

/* ---------------- Pages-dha ---------------- */
import Page11 from "./Pages-dha/Page11.jsx";
import Page12 from "./Pages-dha/Page12.jsx";
import Page13 from "./Pages-dha/Page13.jsx";
import Page14 from "./Pages-dha/Page14.jsx";
import Page15 from "./Pages-dha/Page15.jsx";
import Page16 from "./Pages-dha/Page16.jsx";
import Page17 from "./Pages-dha/SirviceprovidersPage.jsx";
import Page18 from "./Pages-dha/SirvicesPage.jsx";
import PageU35 from "./Pages-dha/PageU35.jsx";

/* ---------------- Abhishek Pages ---------------- */
import PageU24 from "./Pages/PageU24.jsx";
import PageU25 from "./Pages/PageU25.jsx";
import PageU26 from "./Pages/PageU26.jsx";
import PageU27 from "./Pages/PageU27.jsx";
import PageU28 from "./Pages/PageU28.jsx";
import PageU29 from "./Pages/PageU29.jsx";
import PageU30 from "./Pages/PageU30.jsx";
import PageU31 from "./Pages/PageU31.jsx";
import PageMU1 from "./Pages/PageMU1.jsx";
import PageU32 from "./Pages/PageU32.jsx";
import PageU33 from "./Pages/PageU33.jsx";
import PageU36 from "./Pages/PageU36.jsx";
import PageU37 from "./Pages/PageU37.jsx";
import PageU38 from "./Pages/PageU38.jsx";
import PageU39 from "./Pages/PageU39.jsx";
import PageU40 from "./Pages/PageU40.jsx";
import PageU41 from "./Pages/PageU41.jsx";
import PageU44 from "./Pages/PageU44.jsx";
import PageU45 from "./Pages/PageU45.jsx";
import PageU48 from "./Pages/PageU48.jsx";
import PageM14 from "./Pages/PageM14.jsx";

/* ---------------- Other ---------------- */
import Logout from "./Pages/Logout.jsx";
import Profile from "./Pages/Profile.jsx";
import Settings from "./Pages/Settings.jsx";
import History from "./Pages/History.jsx";
import Privacy from "./Pages/Privacy.jsx";

/* ---------------- Thanzeeh Pages ---------------- */
import Page_35 from "./Pages-thanzeeh/Page_35.jsx";
import Page_37 from "./Pages-thanzeeh/Page_37.jsx";
import Page_41 from "./Pages-thanzeeh/Page_41.jsx";
import Page_43 from "./Pages-thanzeeh/Page_43.jsx";
import Page_44 from "./Pages-thanzeeh/Page_44.jsx";
import Page_45 from "./Pages-thanzeeh/Page_45.jsx";
import Page_46 from "./Pages-thanzeeh/Page_46.jsx";
import Page_48 from "./Pages-thanzeeh/Page_48.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Core */}
        <Route path="/" element={<Page1 />} />

        {/* Original */}
        <Route path="/U18_Request_Service" element={<U18_Request_Service />} />
        <Route path="/U17_PROVIDER_PROFILE/*" element={<U17_PROVIDER_PROFILE />} />
        <Route path="/U19Bookings/*" element={<U19Bookings />} />
        <Route path="/U20_Booking_Details/*" element={<U20_Booking_Details />} />
        <Route path="/U21_PAYMENT_METHODS/*" element={<U21_PAYMENT_METHODS />} />
        <Route path="/U21_B_ADD_NEW_CARD/*" element={<U21_B_ADD_NEW_CARD />} />
        <Route path="/U22PaymentSuccessMessage/*" element={<U22PaymentSuccessMessage />} />
        <Route path="/U23EReceipt/*" element={<U23EReceipt />} />

        {/* Components */}
        <Route path="/comp-1" element={<Component1 />} />
        <Route path="/comp-2" element={<Component2 />} />
        <Route path="/comp-3" element={<Component3 />} />
        <Route path="/comp-u" element={<Componentu />} />
        <Route path="/comp-4" element={<Component4 theme="black" showMenu />} />
        <Route path="/comp-5" element={<Component5 />} />
        <Route path="/comp-6" element={<Component6 />} />
        <Route path="/comp-7" element={<Component7 />} />
        <Route path="/comp-8" element={<Component8 />} />
        <Route path="/comp-9" element={<Comp9 open />} />
        <Route path="/comp-10" element={<Comp10 />} />
        <Route path="/comp-11" element={<Comp11 />} />
        <Route path="/comp-12" element={<Comp12 />} />
        <Route path="/comp-13" element={<Comp13 />} />
        <Route path="/comp-14" element={<Comp14 />} />
        <Route path="/comp-15" element={<Comp15 />} />
        <Route path="/div" element={<Diva />} />

        {/* Pages */}
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
        <Route path="/page7" element={<Page7 />} />
        <Route path="/page8" element={<Page8 />} />
        <Route path="/success" element={<Sucess />} />

        {/* Pages-dha */}
        <Route path="/page11" element={<Page11 />} />
        <Route path="/page12" element={<Page12 />} />
        <Route path="/page13" element={<Page13 />} />
        <Route path="/page14" element={<Page14 />} />
        <Route path="/page15" element={<Page15 />} />
        <Route path="/page16" element={<Page16 />} />
        <Route path="/providers" element={<Page17 />} />
        <Route path="/services" element={<Page18 />} />
        <Route path="/pageu35" element={<PageU35 />} />

        {/* Nested */}
        <Route path="/pageu41" element={<PageU41 />}>
          <Route index element={<Faq_50 />} />
          <Route path="faq" element={<Faq_50 />} />
          <Route path="contact" element={<ContactUs_51 />} />
        </Route>

        {/* Utility */}
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/history" element={<History />} />
        <Route path="/privacy" element={<Privacy />} />

        {/* Thanzeeh */}
        <Route path="/Page_35" element={<Page_35 />} />
        <Route path="/Page_37" element={<Page_37 />} />
        <Route path="/Page_41" element={<Page_41 />} />
        <Route path="/Page_43" element={<Page_43 />} />
        <Route path="/Page_44" element={<Page_44 />} />
        <Route path="/Page_45" element={<Page_45 />} />
        <Route path="/Page_46" element={<Page_46 />} />
        <Route path="/Page_48" element={<Page_48 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
