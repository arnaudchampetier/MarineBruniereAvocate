import React, { useState } from "react";

function Footer() {
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
    <div className="bg-gray-950">
      {" "}
      <p className="text-center text-white text-sm py-4 text-trebuc">
        Marine Brunière Avocat - Tous droits réservés ®{" "}
      </p>
      <div className="mt-0 text-center">
        <button
          className="text-white font-trebuc hover:text-white focus:outline-none"
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
      oter
    </div>
  );
}

export default Footer;
