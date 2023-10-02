import React from "react";
import bgfourviere from "../assets/bgfourviere.jpg";

function Honoraires() {
  return (
    <div
      id="honoraires"
      className="flex flex-col items-center justify-center bg-gray-300 text-gray-900 py-0 md:h-screen"
    >
      <div className="bg-gray-900 w-full text-center py-0 h-[140px]">
        <h1
          className="text-3xl md:text-4xl  custom-color font-trebuc text-center flex justify-center mt-12 uppercase mb-24 relative cursor-pointer 
        transition-all duration-500 before:content-[''] before:absolute before:bottom-[-15px] before:left-1/2 before:-translate-x-1/2 
        before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-gray-200
         before:via-gray-800 before:to-gray-200 hover:before:w-full hover:before:opacity-100"
        >
          Honoraires
        </h1>
      </div>

      <div className="md:w-2/3 font-trebuc p-12 md:px-8 md:py-24">
        <p className="text-lg md:text-xl leading-relaxed text-center md:text-left tracking-wider">
          Le montant des honoraires varie en fonction de la nature de la
          prestation, de la complexité de l’affaire et des enjeux du litige.
        </p>
        <p className="mt-4 text-lg md:text-xl leading-relaxed text-center md:text-left tracking-wider">
          La question des honoraires est abordée en toute transparence dès le
          premier rendez-vous afin de permettre au client d’avoir une visibilité
          globale et précise du montant des honoraires.
        </p>
        <p className="mt-4 text-lg md:text-xl leading-relaxed text-center md:text-left tracking-wider">
          Les honoraires sont fixés de quatre façons différentes :
        </p>
        <p className="mt-4 text-lg md:text-xl leading-relaxed text-center md:text-left tracking-wider">
          <strong>L’honoraire forfaitaire :</strong> la facturation est globale
          et déterminée par avance.
        </p>
        <p className="mt-4 text-lg md:text-xl leading-relaxed text-center md:text-left tracking-wider">
          <strong>L’honoraire au temps passé :</strong> la facturation est
          effectuée selon un taux horaire connu au préalable et avec un détail
          des diligences réalisées et du temps consacré.
        </p>
        <p className="mt-4 text-lg md:text-xl leading-relaxed text-center md:text-left tracking-wider">
          <strong>L’honoraire de résultat :</strong> la facturation est composée
          d’un honoraire fixe de provision et d’un honoraire complémentaire
          calculé sur les gains obtenus.
        </p>
        <p className="mt-4 text-lg md:text-xl leading-relaxed text-center md:text-left tracking-wider">
          <strong>La convention d’abonnement mensuel ou trimestriel :</strong>{" "}
          cette facturation forfaitaire est proposée dans le cadre d’un
          accompagnement juridique nécessitant une intervention et des conseils
          récurrents (employeurs, sociétés…).
        </p>
      </div>
    </div>
  );
}

export default Honoraires;
