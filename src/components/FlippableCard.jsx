import React, { useState } from "react";
import bgSaone from "../assets/bgsaone.jpg";
import bgcab from "../assets/bgcab.jpg";
import bgfourviere from "../assets/bgfourviere.jpg";
import bgParc from "../assets/bgParc.jpg";
import bluebg from "../assets/bluebg.jpg";
import bluebg1 from "../assets/bluebg1.jpg";
import Celestins from "../assets/célestins.jpg";

function FlippableCard() {
  const [cards, setCards] = useState([
    {
      id: 1,
      front: "Discipline",
      back: "Voici la section correspondante",
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
      image: bluebg,
      flipped: false,
    },
    {
      id: 6,
      front: "Harcèlement moral",
      back: "Voici la section correspondante",
      image: bluebg1,
      flipped: false,
    },
  ]);

  const handleFlip = (cardId) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, flipped: !card.flipped } : card
      )
    );
  };

  return (
    <main>
      <div
        id="domaines"
        className="min-h-screen bg-gray-300"
        style={{
          position: "relative",
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
        <div className="h-screen centered mt-96 md:mt-64 lg:mt-24 xl:mb-0 md:mb-48 lg:mb-12 custom-mb">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 2xl:gap-16 xl:gap-12 lg:gap-6  lg:grid-cols-3 mt-96 md:mt-0 mb-24 cursor-pointer">
            {cards.map((card) => (
              <div
                key={card.id}
                onMouseOver={() => handleFlip(card.id)}
                className={`relative card ${card.flipped ? "cardFlip" : ""}`}
              >
                {/* front */}
                <div className="front">
                  <img
                    src={card.image}
                    alt=""
                    className="md:w-96 md:h-96 w-64 h-64  rounded-xl shadow-xl"
                  />
                  <p className="text-white text-2xl font-bold font-cinzel absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {card.front}
                  </p>
                </div>

                {/* back */}
                <div className="absolute top-0 back">
                  <img
                    src={card.image}
                    alt=""
                    className="md:w-96 md:h-96 w-64 h-64 rounded-xl opacity-60"
                  />
                  <p className="text-white text-2xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {card.back}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default FlippableCard;
