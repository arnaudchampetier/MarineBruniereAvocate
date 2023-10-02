import React from "react";
import MarineAvocate from "../assets/marineRobe.jpeg";
import bgCabinetImage from "../assets/pencil.jpg";
import LogoKevinBlack from "../assets/logoMBtest.png";

function Presentation() {
  return (
    <div
      id="cabinet"
      className="flex flex-col items-center justify-center bg-cover"
    >
      <div className="w-full text-center p-10  bg-gray-900 ">
        <h1
          className="text-3xl md:text-4xl font-trebuc md:mb-4 custom-color
        
        uppercase 
        relative cursor-pointer transition-all duration-500
       before:content-[''] before:absolute before:bottom-[-15px] before:left-1/2 before:-translate-x-1/2 
       before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500
        before:bg-gradient-to-r before:from-gray-200 before:via-gray-800 before:to-gray-200 hover:before:w-full hover:before:opacity-100
        
        "
        >
          Le cabinet
        </h1>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 h-4/5 bg-gray-300">
          <img
            className="w-3/4 md:w-full h-full object-cover rounded-full mx-auto md:mx-4 py-12"
            src={MarineAvocate}
            alt="Marine Avocate"
          />
        </div>

        <div className=" bg-gray-300  flex flex-col justify-start md:ml-0 w-full md:w-2/3 p-8 text-left ">
          <div className="   opacity-70 rounded-lg p-6 md:p-24">
            <p className=" md:text-2xl font-trebuc  md:px-2 text-black">
              Marine Brunière est avocat collaborateur au Cabinet JEAN-PIERRE &
              WALGENWITZ depuis novembre 2020.
            </p>
            <p className="mt-4 text-sm md:text-2xl font-trebuc">
              Elle a obtenu son Certificat d’aptitude à la Profession d’avocat
              (CAPA) en novembre 2020 et a prêté serment en décembre 2020. Elle
              est titulaire d’un Master 1 de Droit public général de
              l’Université Jean Moulin-Lyon 3.
            </p>
            <p className="mt-4 text-sm md:text-2xl  font-trebuc">
              Elle a réalisé un stage de 6 mois au sein de la chambre fonction
              publique d’Etat du Tribunal administratif de LYON lors de sa
              formation à l’Ecole des Avocats de la Région Rhône Alpes ainsi
              qu’un stage de 6 mois dans un cabinet de droit public lyonnais.
            </p>
            <p className="mt-4 text-sm md:text-2xl  font-trebuc">
              Elle est chargé d’enseignement en droit public à l’Université
              d’Aix Marseille.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
