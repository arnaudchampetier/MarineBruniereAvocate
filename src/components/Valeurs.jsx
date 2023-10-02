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
      label: "Ecoute",
      icon: <FaRegLightbulb size={42} className="custom-color" />,
    },
    {
      label: "Accompagnement",
      icon: <FaHandshake size={42} className="custom-color" />,
    },
    {
      label: "Transparence",
      icon: <FaUserSecret size={42} className="custom-color" />,
    },
    {
      label: "Confidentialité",
      icon: <FaLock size={42} className="custom-color" />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 custom-color py-6 md:h-[350px]">
      <h1
        className="text-2xl md:text-4xl font-trebuc uppercase mb-12 md:mb-8 mt-6 md:mt-24 
       relative cursor-pointer transition-all duration-500 custom-color
      before:content-[''] before:absolute before:bottom-[-15px] before:left-1/2 before:-translate-x-1/2 
      before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500
       before:bg-gradient-to-r before:from-gray-200 before:via-gray-800 before:to-gray-200 hover:before:w-full hover:before:opacity-100
      "
      >
        Nos engagements
      </h1>
      <div className="md:w-full w-full">
        <div className="grid grid-cols-2 gap-0 xl:gap-24 lg:gap-6 md:gap-6 mt-4  md:flex md:justify-center bg-gray-300  ">
          {valeurs.map((valeur, index) => (
            <div
              key={index}
              className="flex flex-col items-center mb-24  mt-12"
            >
              <div className="">{valeur.icon}</div>
              <p className="mr-8 text-md xl:text-2xl lg:text-xl md:text-lg font-trebuc text-gray-900 uppercase  mt-6 md:mt-12">
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
