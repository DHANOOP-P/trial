import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import
import AppHeader from '../components/AppHeader';
import CourseItem from '../components/CourseItem';
import PaymentMethodsSection from '../components/PaymentSelection';

const U21_PAYMENT_METHODS = () => {
  const navigate = useNavigate(); // 2. Initialize

  const paymentOptions = [
    { label: 'Paypal', value: 'paypal' },
    { label: 'Google Pay', value: 'googlepay' },
    { label: 'Credit Card', value: 'creditcard' },
    { label: 'Debit Card', value: 'debitcard' },
  ];

  // 3. Update the logic to navigate
  const handlePaymentSubmit = (paymentMethod) => {
    console.log('Payment method selected:', paymentMethod);

    // If they pick a card, go to the "Add Card" page (U21_B)
    if (paymentMethod === 'creditcard' || paymentMethod === 'debitcard') {
      navigate('/U21_B_ADD_NEW_CARD');
    } else {
      // Logic for Paypal or Google Pay
      navigate('/U23PaymentSuccessMessage');
    }
  };

  return (
    <div>
      <AppHeader 
        title="PAYMENT METHODS"
        // onBack={() => navigate('/U20_Booking_Details')} // 4. Back to 20
      />

      <div className="px-4 mt-10">
        <CourseItem />
      </div>

      <div className="px-4 mt-6">
        <PaymentMethodsSection 
          options={paymentOptions} 
          price="$55" 
          onEnroll={handlePaymentSubmit} 
        />
      </div>
    </div>
  );
};

export default U21_PAYMENT_METHODS;