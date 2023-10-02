import React from "react";
import { Link } from "react-scroll";
import TerreauxImage from "../assets/terreauxCher.jpg";
import LogoKevinWhite from "../assets/logoMBtest.png";
import "./NavBar.css";

function Home() {
  return (
    <div id="home" className="relative overflow-hidden h-screen bg-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center bg-fixed black-and-white mt-42  opacity-40 bg-image"
        style={{
          backgroundImage: `url(${TerreauxImage})`,
        }}
      ></div>

      <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-500 ease-in-out delay-2000"></div>

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center md:justify-end h-full px-4 md:flex-row">
        <div className="flex flex-col md:mx-12 mx-auto md:flex md:flex-col items-center md:items-end md:justify-end text-white">
          <div
            className="bg-gray-900 opacity-80 flex flex-col justify-center md:px-4 py-20 mt-8 md:mt-24 z-10 w-full
           sm:w-3/4 text-center md:w-full md:h-[300px]  rounded-xl shadow-2xl"
          >
            <p className="text-white text-lg md:text-5xl font-semibold font-trebuc mb-4 px-24">
              MARINE BRUNIERE
            </p>
            <p className="custom-color text-lg md:text-3xl font-trebuc font-semibold  mb-12">
              AVOCAT AU BARREAU DE LYON
            </p>
            <p className="text-white text-md md:text-3xl font-trebuc leading-relaxed px-10 md:px-2">
              Droit de la fonction publique <br /> Médiation
            </p>
          </div>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <button
              className="text-gray-900 opacity-90 custom-button font-trebuc px-8 py-4 
             mx-auto md:mx-64 flex items-center rounded-xl shadow-2xl hover:scale-110 duration-300 md:text-xl mt-8 uppercase font-semibold"
            >
              Contact
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute inset-0  pointer-events-none"></div>
    </div>
  );
}

export default Home;
