import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import the tool
import AppHeader from '../components/AppHeader';
import CardPaymentForm from '../components/CardPaymentForm';

const U21_B_ADD_NEW_CARD = () => {
  const navigate = useNavigate(); // 2. Initialize the navigator

  // 3. Define the path back to 20
  // const handleBackToDetails = () => {
  //   navigate('/U20_Booking_Details');
  // };

  return (
    <div>
      <AppHeader 
        title="ADD CARD"
        // onBack={handleBackToDetails} // 4. Connect the function
      />

      <CardPaymentForm />
    </div>
  );
};

export default U21_B_ADD_NEW_CARD;