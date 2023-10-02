import React, { useState } from "react";
import bgSaone from "../assets/bgsaone.jpg";
import bgcab from "../assets/bgcab.jpg";
import bgfourviere from "../assets/bgfourviere.jpg";
import bgParc from "../assets/bgParc.jpg";
import bluebg from "../assets/bluebg.jpg";
import bluebg1 from "../assets/bluebg1.jpg";
import Celestins from "../assets/célestins.jpg";

function CardFlipTest() {
  const [cards, setCards] = useState([
    {
      id: 1,
      front: "Discipline",
      back: "Accompagnement et assistance juridiques et judiciaires pour les employeurs et les salariés (contrat de travail, embauche, rupture conventionnelle, licenciement, accord collectif, élections professionnelles…)",
      image: bgSaone,
      flipped: false,
    },
    {
      id: 2,
      front: "Accident du service / Maladies professionnelles",
      back: "Voici la section correspondante",
      image: bgcab,
      flipped: false,
    },
    {
      id: 3,
      front: "Carrière",
      back: "Voici la section correspondante",
      image: bgfourviere,
      flipped: false,
    },
    {
      id: 4,
      front: "Rémunération",
      back: "Voici la section correspondante",
      image: bgParc,
      flipped: false,
    },
    {
      id: 5,
      front: "Protection fonctionnelle",
      back: "Voici la section correspondante",
      image: Celestins,
      flipped: false,
    },
    {
      id: 6,
      front: "Harcèlement moral",
      back: "Voici la section correspondante",
      image: bluebg,
      flipped: false,
    },
  ]);

  const handleCardFlip = (index) => {
    setCards((prevCards) => {
      const updatedCards = prevCards.map((card) => {
        if (card.id === index) {
          return { ...card, flipped: !card.flipped };
        }
        return card;
      });
      return updatedCards;
    });
  };

  return (
    <div
      id="domaines"
      className="min-h-screen w-screen bg-cover bg-no-repeat bg-center bg-fixed "
      style={{
        position: "relative",
        backgroundImage: `url(${bluebg1})`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-fixed"></div>
      <div className="bg-blue-950 w-full text-center p-10 border-0 border-gray-100 ">
        <h1
          className="md:text-4xl text-3xl font-cinzel text-white mb-8 opacity-80
               uppercase  mt-4
               relative cursor-pointer transition-all duration-500
              before:content-[''] before:absolute before:bottom-[-15px] before:left-1/2 before:-translate-x-1/2 
              before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500
               before:bg-gradient-to-r before:from-gray-200 before:via-gray-800 before:to-gray-200 hover:before:w-full hover:before:opacity-100
              
        "
        >
          Domaines de compétences{" "}
        </h1>
      </div>
      <div className="cols">
        {cards.map((card, index) => (
          <div
            className={`col h-full mt-24 ${card.flipped ? "hover" : ""}`}
            key={card.id}
            onClick={() => handleCardFlip(card.id)}
            onTouchStart={() => handleCardFlip(card.id)}
          >
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="inner ">
                  <p className="text-sm font-semplicita ">{card.front}</p>
                  <button className="p-1 bg-green-900 rounded-xl">
                    {" "}
                    Plus d'informations ?
                  </button>
                </div>
              </div>
              <div className="back">
                <div className="inner bg-blue-900 rounded-lg h-full flex justify-center">
                  <p>{card.back}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardFlipTest;
