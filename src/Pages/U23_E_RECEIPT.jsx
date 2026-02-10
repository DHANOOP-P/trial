import React from "react";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas"; // Ensure you ran 'npm install html2canvas'
import AppHeader from "../components/AppHeader";
import Ereciept from "../components/Ereciept";

const U23EReceipt = () => {
  const navigate = useNavigate();

  const handleBackToPayment = () => {
    navigate('/U21_PAYMENT_METHODS');
  };

  // 📸 DOWNLOAD FUNCTION
  const handleDownload = async () => {
    const element = document.getElementById("receipt-content");
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: "#ffffff",
        scale: 3, // High quality
      });
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "E-Receipt.png";
      link.click();
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  // 🖨️ PRINT FUNCTION
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AppHeader
        title="E-RECEIPT"
        onBack={handleBackToPayment}
        showMenu={true}
        onDownload={handleDownload} // ✅ Connected
        onPrint={handlePrint}       // ✅ Connected
      />

      <div className="p-4">
        <Ereciept />
      </div>
    </div>
  );
};

export default U23EReceipt;