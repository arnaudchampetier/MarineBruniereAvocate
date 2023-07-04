import React from "react";
import TerreauxImage from "../assets/terreaux.jpg";
import LogoKevinWhite from "../assets/logoKevinWhite.svg";

function Home() {
  return (
    <div id="home" className="relative overflow-hidden h-screen">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center bg-fixed"
        style={{
          backgroundImage: `url(${TerreauxImage})`,
        }}
      ></div>

      <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-500 ease-in-out delay-2000"></div>

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center md:justify-end h-full px-4 md:flex-row">
        <div className="flex flex-col md:mx-12 mx-auto md:flex md:flex-col items-center md:items-end md:justify-end text-white">
          <img
            src={LogoKevinWhite}
            alt="Logo Kevin"
            className="md:h-40 h-24 mt-24 md:mt-0 z-10 mb-4 md:mb-0"
          />

          <div
            className="bg-yellow-800 opacity-80 flex flex-col justify-center md:px-4 py-20 mt-8 md:mt-24 z-10 w-full
           sm:w-3/4 text-center md:w-1/2 h-[350px] rounded-xl shadow-2xl"
          >
            <p className="text-white text-lg md:text-2xl font-cinzel mb-12">
              DROIT DE LA FONCTION PUBLIQUE
            </p>
            <p className="text-white text-md md:text-lg font-semplicita leading-relaxed px-10 md:px-2">
              Avocate au Barreau de Lyon depuis 2020, j'accompagne les agents
              publics dans les différentes problématiques rencontrées au cours
              de leur carrière en les aidant à faire valoir leurs droits et en
              les défendant en justice.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black-50 to-gray-800 pointer-events-none"></div>
    </div>
  );
}

export default Home;
