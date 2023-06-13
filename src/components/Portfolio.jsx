import React from "react";
import ChezMaria from "../assets/chezmariascreen.png";
import P1 from "../assets/P1screen.png";
import P2 from "../assets/P2screen.png";
import P3 from "../assets/P3screen.png";
import autres from "../assets/else.jpg";

function Portfolio({ lightMode }) {
  const portfolio = [
    {
      id: 1,
      src: ChezMaria,
      description: "Projet freelance - Chez Maria Epicerie ardéchoise à Lyon",
      stack: "React/TailWind, NodeJs",
      demo: "https://chezmaria.vercel.app/",
      code: "https://github.com/arnaudchampetier/chezmaria",
    },
    {
      id: 2,
      src: P3,
      description:
        "P3 - La Poste - Ligne Bleue Rendre accessible le numérique par l'apprentissage.",
      stack: "React/TailWind, Express/MySql, NodeJs",
      demo: "https://www.loom.com/embed/9df13ebb3b97415aa8820c9612dc9e3f",
      code: "https://github.com/WildCodeSchool/P3_La-Poste_Lyon_React_Sept_2022",
    },
    {
      id: 3,
      src: P2,
      description:
        "P2 - Wild On Track Service de création de carnet de voyage avec les vols, hôtels, restaurants et activités d'un séjour.",
      stack: "React/MaterialUi, ApiRest/NodeJs",
      demo: "https://www.loom.com/embed/99d0b6c469924bec9dfb79f2f343d5c5",
      code: "https://github.com/WildCodeSchool/P2_Wild-On-Track_Lyon-React-Sept-2022",
    },
    {
      id: 4,
      src: P1,
      description: "P1 - FFK Premier projet en équipe",
      stack: "Html/CSS/JavaScript",
      demo: "https://musical-ganache-813abc.netlify.app/",
      code: "https://github.com/ChaiDaryl/Project_Samourai",
    },
    {
      id: 5,
      src: autres,
      description: "Autres réalisations et apprentissage",
      stack:
        "Participation à deux hackathons, Veille technologique, Ateliers, Dojos, Standups quotidiens, Bonnes pratiques, clean code, POO ...",
    },
  ];

  const portfolioClassName = lightMode
    ? "bg-gray-500"
    : "bg-gradient-to-b from-black to-gray-800 text-white md:h-screen";

  return (
    <div id="portfolio" name="portfolio" className={portfolioClassName}>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold font-larken inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Quelques projets en équipe & perso</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-96 md:mb-104">
          {portfolio.map(({ id, src, description, stack, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="chezmaria"
                className="rounded-md duration-300 hover:scale-105 h-[200px]"
              />
              <div className="p-4">
                <p className="text-lg font-bold mb-2">{description}</p>
                {id !== 5 && (
                  <>
                    <p className="text-sm text-gray-500">Stack: {stack}</p>
                    <div className="flex items-center justify-center">
                      <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      >
                        Demo
                      </a>
                      <a
                        href={code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      >
                        Code
                      </a>
                    </div>
                  </>
                )}
                {id === 5 && <p className="text-sm text-gray-500">{stack}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;