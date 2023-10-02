import React from "react";
import Accordeon from "./Accordeon";

const domainesCompetences = [
  {
    title: "Relations individuelles de travail",
    content: [
      "- Rédaction et exécution du contrat de travail : durée du travail, non-concurrence, mobilité",
      "- Licenciement, rupture conventionnelle, démission équivoque",
      "- Transaction : négociation à l’aune du régime social de l’indemnité, rédaction, exécution",
      "- Discrimination et harcèlement, etc.",
    ],
  },
  {
    title: "Relations collectives de travail",
    content: [
      "- Règlement intérieur",
      "- NAO, accord d’entreprise",
      "- Information et consultation des IRP",
      "- Licenciement collectif, etc.",
    ],
  },
  {
    title: "Santé au travail",
    content: [
      "- Relations avec la médecine du travail",
      "- Prévention, hygiène et sécurité",
      "- Accident du travail et maladie professionnelle",
      "- Faute inexcusable, etc.",
    ],
  },
  {
    title: "Relations avec l'administration du travail",
    content: [
      "- Transfert ou rupture du contrat des salariés protégés",
      "- Enquête contradictoire",
      "- Réponse à mise en demeure",
      "- Activité partielle, etc.",
    ],
  },
];

function DomaineCompetences2() {
  return (
    <div id="domaines" className="custom-color min-h-[75vh] bg-gray-300">
      <div className="w-full text-center p-10 bg-gray-900">
        <h1
          className="text-3xl md:text-4xl font-trebuc md:mb-4 custom-color
            uppercase relative cursor-pointer transition-all duration-500
            before:content-[''] before:absolute before:bottom-[-5px] before:left-1/2 before:-translate-x-1/2
            before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500
            before:bg-gradient-to-r before:from-gray-200 before:via-gray-800 before:to-gray-200 hover:before:w-full hover:before:opacity-100"
        >
          Domaines de Compétences{" "}
        </h1>
      </div>
      <div className="h-[75%]">
        <div className="bg-gray-300 w-full md:w-1/2 rounded-lg md:p-8 p-4 text-center mx-auto ">
          {domainesCompetences.map((domaine, index) => (
            <Accordeon
              key={index}
              title={domaine.title}
              content={domaine.content.map((item, i) => (
                <p
                  key={i}
                  className="text-left my-8 text-black font-trebuc text-xl"
                >
                  {item}
                </p>
              ))}
              className="border border-gray-300 p-4 rounded-lg shadow-md mb-4 flex items-center justify-center"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DomaineCompetences2;
