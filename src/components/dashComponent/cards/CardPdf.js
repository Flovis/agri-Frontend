import React, { useState } from "react";

const CardPdf = ({ pdfFile, titre, description }) => {
  const [showPdf, setShowPdf] = useState(false);

  const handlePdfClick = () => {
    setShowPdf(true);
  };

  const handlePdfClose = () => {
    setShowPdf(false);
  };

  const PdfViewer = () => {
    return (
      <div className="fixed top-24 inset-0 flex items-center justify-center">
        <div className="bg-[white] max-w-full h-full overflow-auto">
          <div className="pdf-container">
            <embed
              src={URL.createObjectURL(pdfFile)}
              type="application/pdf"
              className="w-full h-full"
            />
          </div>
          {/* Bouton pour fermer */}
          <button className="absolute top-4 right-4" onClick={handlePdfClose}>
            X
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
      className="mx-auto rounded-lg bg-custom-white w-56 overflow-hidden border border-borde-gray"
      onClick={handlePdfClick}
    >
      <div className="max-w-md p-6 bg-custom-white rounded-lg">
        <div className="pdf-container">
          <embed
            src={URL.createObjectURL(pdfFile)}
            type="application/pdf"
            className="w-full h-40 sm:h-56 object-cover"
          />
        </div>
        <h1 className="text-md mb-4">{description}</h1>
        <p className="mb-4">{titre}</p>
      </div>
      {showPdf && <PdfViewer />}
    </div>
  );
};

export default CardPdf;
