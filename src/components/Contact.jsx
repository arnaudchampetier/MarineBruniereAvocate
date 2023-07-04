import React, { useState } from "react";

function Contact() {
  const [showLegalNotice, setShowLegalNotice] = useState(false);
  const [optionIsOpen, setOptionIsOpen] = useState(false);

  const handleLegalNoticeClick = () => {
    setShowLegalNotice(!showLegalNotice);
  };

  const handleSelectOpen = () => {
    setOptionIsOpen(true);
  };

  const handleSelectClose = () => {
    setOptionIsOpen(false);
  };

  return (
    <div
      id="contact"
      name="contact"
      className={`w-full min-h-screen flex flex-col items-center justify-center bg-blue-950 `}
    >
      <div className="mt-24 max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8 text-white">
          <p
            className={`md:text-4xl text-3xl font-cinzel font-bold inline border-b-4 border-gray-500 p-2`}
          >
            Contact
          </p>
          <p className={`py-6 font-semplicita text-lg`}>
            Remplissez le formulaire pour me faire part de votre situation
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/e8c06757-d7cd-472c-8f6f-e12b6dbf354e"
            method="POST"
            className="flex flex-col w-full md:w-full font-semplicita "
          >
            <input
              type="text"
              name="name"
              placeholder="Entrez votre nom"
              className="p-2   bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
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
            <select
              name="requestType"
              className={`p-2  bg-transparent border-2 rounded-md text-gray-400 focus:outline-none mb-4 ${
                optionIsOpen ? "bg-blue-950" : ""
              }`}
              onFocus={handleSelectOpen}
              onBlur={handleSelectClose}
            >
              <option value="">Votre demande concerne...</option>
              <option value="Discipline">Discipline</option>
              <option value="Accident du service /Maladies professionnelles">
                Accident du service /Maladies professionnelles
              </option>
              <option value="Carrière">Carrière</option>
              <option value="Rémunération">Rémunération</option>
              <option value="Protection fonctionnelle">
                Protection fonctionnelle
              </option>
              <option value="Harcèlement moral">Harcèlement moral</option>

              <option value="Autre">Autre</option>
            </select>
            <textarea
              name="message"
              placeholder="Entrez votre message"
              rows="10"
              className="p-2 font-semplicita bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
            ></textarea>
            <button
              className="text-gray-800 font-cinzel bg-gradient-to-b from-zinc-100 to-gray-300 px-12 py-4 
             mx-auto flex items-center rounded-md hover:scale-110 duration-300 md:text-2xl"
            >
              Envoyer{" "}
            </button>
          </form>
        </div>
        <p className="text-center text-white text-sm mt-8">
          Marine Brunière Avocat - Tous droits réservés ®{" "}
        </p>
        <div className="mt-4 text-center">
          <button
            className="text-gray-400 hover:text-white focus:outline-none"
            onClick={handleLegalNoticeClick}
          >
            Mentions légales
          </button>
          {showLegalNotice && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-gray-800 rounded-md p-4 w-3/4 sm:w-1/2 lg:w-1/2 lg:h-1/2 text-left ">
                {" "}
                <div className="flex justify-end">
                  <button
                    className="text-gray-400 hover:text-white focus:outline-none"
                    onClick={handleLegalNoticeClick}
                  >
                    ✕
                  </button>
                </div>
                <p className="text-white mb-10 font-larken font-semibold">
                  Mentions Légales
                </p>
                <p className="text-white font-semplicita mb-2 font-semibold">
                  Propriétaire
                </p>
                <p className="text-white font-semplicita mb-6">
                  Monsieur Arnaud CHAMPETIER – Lyon, France
                </p>
                <p className="text-white font-semplicita mb-2 font-semibold">
                  Responsable de la publication
                </p>
                <p className="text-white font-semplicita mb-6">
                  Arnaud CHAMPETIER – arnaud.champetier9@gmail.com
                </p>
                <p className="text-white font-semplicita mb-2 font-semibold">
                  Webmaster
                </p>
                <p className="text-white font-semplicita mb-6">
                  Arnaud CHAMPETIER
                </p>
                <p className="text-white font-semplicita mb-2 font-semibold">
                  Hébergement
                </p>
                <p className="text-white font-semplicita mb-8">
                  Ce site est hébergé par Vercel
                </p>
                <p className="text-white font-semplicita italic">
                  Ce site ne collecte aucune donnée personnelle et n'utilise pas
                  de cookies.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
