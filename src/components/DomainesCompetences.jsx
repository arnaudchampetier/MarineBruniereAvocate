import React from "react";
import bgSaone from "../assets/bgcab.jpg";
import GrayBg from "../assets/bluebg.jpg";
import Celestins from "../assets/célestins.jpg";

function DomaineCompetences() {
  const cards = [
    {
      title: "Discipline",
      image: GrayBg,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    },
    {
      title: "Accident du service / Maladies professionnelles",
      image: GrayBg,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    },
    {
      title: "Carrière",
      image: GrayBg,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    },
    {
      title: "Rémunération",
      image: GrayBg,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    },
    {
      title: "Protection fonctionnelle",
      image: GrayBg,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    },
    {
      title: "Harcèlement moral",
      image: GrayBg,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        position: "relative",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${Celestins})`,
          opacity: 0.8,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.8) saturate(1.2)",
        }}
      ></div>
      <div className="bg-gray-300 w-full text-center p-10 border-2 border-gray-100">
        <h1
          className="md:text-4xl text-3xl font-cinzel text-white mb-8 opacity-80
               uppercase 
               relative cursor-pointer transition-all duration-500
              before:content-[''] before:absolute before:bottom-[-15px] before:left-1/2 before:-translate-x-1/2 
              before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500
               before:bg-gradient-to-r before:from-gray-200 before:via-gray-800 before:to-gray-200 hover:before:w-full hover:before:opacity-100
              
        "
        >
          Domaines de compétences{" "}
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-24 mb-48">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative cursor-pointer items-center justify-center overflow-hidden rounded-3xl transition-shadow hover:shadow-xl hover:shadow-black/30"
            >
              <div className="h-64 w-56 md:h-96 md:w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110 opacity-50"
                  src={card.image}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-1000 group-hover:translate-y-0">
                <h1 className="font-cinzel text-2xl  text-white mb-48">
                  {card.title}
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {card.description}
                </p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DomaineCompetences;
