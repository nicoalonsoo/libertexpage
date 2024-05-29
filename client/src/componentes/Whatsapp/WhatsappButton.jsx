import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumbers = [
    "+543412554689", 
    "+543412558847",
    "+543415315863", 
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Obtener el día del año
    const today = new Date();
    const dayOfYear = Math.floor(
      (Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) -
        Date.UTC(today.getFullYear(), 0, 0)) /
        24 /
        60 /
        60 /
        1000
    );

    // Establecer el índice actual basado en el día del año
    setCurrentIndex(dayOfYear % phoneNumbers.length);
  }, []);

  return (
    <a href={`https://wa.me/${phoneNumbers[currentIndex]}`} target="_blank" rel="noopener noreferrer">
     <button
            className="ov-lead-trigger max-w-[700px] text-white text-3xl py-2 px-2 rounded-lg mt-4 mb-4 mx-2 my-4 md:my-0"
        
          >
            REGÍSTRATE!
            <p className="text-0.875rem leading-1.25rem">
              (sólo para personas que quieren iniciarse en el trading o que ya
              se iniciaron pero no tienen buenos resultados).
            </p>
          </button>
    </a>
  );
};

export default WhatsAppButton;
