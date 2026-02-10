import React from "react";
import { Share2, Download, Printer } from "lucide-react";

export default function HeaderDropDown({ onClose }) {

  // ✅ SHARE
  const handleShare = async () => {
    const data = {
      title: "E-Receipt",
      text: "Check out this receipt",
      url: window.location.href,
    };

    if (navigator.share) {
      await navigator.share(data);
    } else {
      const msg = encodeURIComponent(data.text + " " + data.url);
      window.open(`https://wa.me/?text=${msg}`, "_blank");
    }

    onClose();
  };

  // ✅ DOWNLOAD PDF (Vite-safe)
  const handleDownload = async () => {
    const element = document.getElementById("pdf-content");

    if (!element) {
      alert("PDF content not found");
      return;
    }

    const html2pdf = (await import("html2pdf.js")).default;

    html2pdf()
      .from(element)
      .set({
        margin: 10,
        filename: "ereceipt.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff",
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },
      })
      .save();

    onClose();
  };

  return (
    <div className="absolute right-3 top-16 z-50 w-44 bg-gray-200 rounded-xl shadow-lg border border-gray-300 overflow-hidden">
      <Item label="Share" icon={<Share2 size={18} />} onClick={handleShare} />
      <Item label="Download PDF" icon={<Download size={18} />} onClick={handleDownload} />
      <Item label="Print" icon={<Printer size={18} />} onClick={() => window.print()} />
    </div>
  );
}

const Item = ({ label, icon, onClick }) => (
  <button
    onClick={onClick}
    className="flex justify-between items-center w-full px-4 py-2 text-sm hover:bg-gray-300 transition"
  >
    {label}
    {icon}
  </button>
);
