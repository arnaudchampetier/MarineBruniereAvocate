import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Importer les icônes de React Icons

function Accordeon({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item border border-gray-300 rounded-lg mb-4">
      <div
        className=" rounded-xl shadow-lg bg-gray-900 px-4 py-4 flex items-center cursor-pointer text-center font-trebuc text-xl md:text-2xl  mt-6"
        onClick={toggleAccordion}
      >
        <div className="flex justify-between w-full">
          <span className="text-center w-11/12">{title}</span>
          <span className="w-1/12 text-right">
            {isOpen ? (
              <FaMinus /> // Utiliser l'icône FaMinus lorsque l'élément est ouvert
            ) : (
              <FaPlus /> // Utiliser l'icône FaPlus lorsque l'élément est fermé
            )}
          </span>
        </div>
      </div>
      {isOpen && (
        <div className=" shadow-xl rounded-xl bg-gray-300 p-4 border-t border-gray-300">
          {content}
        </div>
      )}
    </div>
  );
}

export default Accordeon;
