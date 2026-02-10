import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterServiceHeader from '../components/RegisterServiceHeader';
import ServiceRequest from '../components/ServiceRequest';
import AlertModal from '../components/AlertModal';

const U18_Request_Service = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // 1. Function for the Receipt (Existing)
  const handleGoToReceipt = () => {
    navigate('/U23EReceipt');
  };

  // 2. NEW: Function for the Back Button
  const handleBackToProfile = () => {
    navigate('/U17_PROVIDER_PROFILE'); // Navigates to the profile page
  };
        
  return (
    <div className="min-h-screen bg-white relative">
      {/* 3. ADD THE onBack PROP HERE 👇 */}
      <RegisterServiceHeader 
        title="REQUEST SERVICE" 
        onBack={handleBackToProfile} 
      />

      <ServiceRequest onConfirm={() => setShowModal(true)} />
      
      {showModal && (
        <AlertModal 
          title="Congratulations"
          message="Your Payment is Successful. Purchase a New Course"
          onClose={() => setShowModal(false)}
          onReceiptButtonClick={handleGoToReceipt} 
        />
      )}
    </div>
  )
}

export default U18_Request_Service;