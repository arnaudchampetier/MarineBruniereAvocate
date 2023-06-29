import React from "react";
import {
  FaRegLightbulb,
  FaHandshake,
  FaUserSecret,
  FaLock,
} from "react-icons/fa";

function Valeurs() {
  const valeurs = [
    {
      label: "Expertise",
      icon: <FaRegLightbulb size={60} className="text-yellow-600" />,
    },
    {
      label: "Confiance",
      icon: <FaHandshake size={60} className="text-yellow-600" />,
    },
    {
      label: "Transparence",
      icon: <FaUserSecret size={60} className="text-yellow-600" />,
    },
    {
      label: "Confidentialité",
      icon: <FaLock size={60} className="text-yellow-600" />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-gray-300 text-gray-700 py-6 md:h-1/4">
      <h1
        className="text-3xl md:text-4xl font-cinzel uppercase mb-24 mt-6 md:mt-12
       relative cursor-pointer transition-all duration-500
      before:content-[''] before:absolute before:bottom-[-15px] before:left-1/2 before:-translate-x-1/2 
      before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500
       before:bg-gradient-to-r before:from-gray-200 before:via-gray-800 before:to-gray-200 hover:before:w-full hover:before:opacity-100
      "
      >
        Mes engagements
      </h1>
      <div className="md:w-full">
        <div className="grid grid-cols-2 gap-2 md:gap-36 mt-4 md:flex md:justify-center ">
          {valeurs.map((valeur, index) => (
            <div
              key={index}
              className="flex flex-col items-center mb-24 md:mr-8"
            >
              {valeur.icon}
              <p className="ml-2 text-md md:text-3xl font-cinzel uppercase mt-6 md:mt-12">
                {valeur.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Valeurs;
