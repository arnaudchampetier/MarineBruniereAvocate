import React, { useState } from "react";
import LogoKevinWhite from "../assets/logoMBtest.png";

function Contact() {
  return (
    <div
      id="contact"
      name="contact"
      className={`w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 `}
    >
      <div className="mt-24 max-w-screen-lg md:w-1/3 mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8 custom-color">
          <p
            className={`md:text-4xl text-3xl font-trebuc font-bold uppercase inline border-b-4 custom-border p-2`}
          >
            Contact
          </p>
          <p className={`py-6 text-white font-trebuc text-lg  `}>
            Remplissez le formulaire pour me faire part de votre situation
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/e8c06757-d7cd-472c-8f6f-e12b6dbf354e"
            method="POST"
            className="flex flex-col w-full md:w-full font-trebuc "
          >
            <input
              type="text"
              name="name"
              placeholder="Entrez votre nom"
              className="p-2   bg-transparent border-2 rounded-md  focus:outline-none mb-4"
            />
            <input
              type="text"
              name="mail"
              placeholder="Entrez votre mail"
              className="p-2  bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
            />
            <input
              type="text"
              name="phone"
              placeholder="Entrez votre téléphone"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
            />
            <input
              type="text"
              name="phone"
              placeholder="Objet de votre demande"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
            />

            <textarea
              name="message"
              placeholder="Entrez votre message"
              rows="10"
              className="p-2 font-trebuc bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
            ></textarea>
            <button
              className="text-gray-800 font-trebuc custom-button px-12 py-4 
             mx-auto flex items-center rounded-md hover:scale-110 duration-300 md:text-2xl"
            >
              Envoyer{" "}
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center md:justify-end h-full px-4 md:flex-row ">
        <div className="flex flex-col md:mx-12 mx-auto md:flex md:flex-col items-center md:items-end md:justify-end text-white ">
          <div
            className=" bg-gray-900 opacity-80 flex flex-col justify-center md:px-4 md:py-24 mt-8 md:mt-0 z-10 w-full
           sm:w-3/4 text-center md:w-full md:h-2/3 rounded-xl shadow-2xl mx-auto"
          >
            <img
              src={LogoKevinWhite}
              alt="Logo Kevin"
              className="md:h-80 md:w-80 h-32 w-32 py-4 px-4 ml-8 cursor-pointer"
            />

            <p className="text-white text-lg md:text-2xl font-trebuc font-light  mb-12">
              Tel : 06 43 44 23 80 <br /> Courriel :
              marinebruniere.avocat@gmail.com
              <br /> Adresse : 89 rue de Créqui 69006 Lyon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
