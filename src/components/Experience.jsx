import React from "react";
import html from "../assets/HTML5.png";
import css from "../assets/CSS.png";
import Express from "../assets/ExpressJS1.png";
import react from "../assets/REACT.png";
import Node from "../assets/NodeJS.jpg";
import GitHub from "../assets/github1.png";
import javascript from "../assets/JS.png";
import tailwind from "../assets/tailwind.jpg";
import materialUi from "../assets/materialUI.png";
import Postman from "../assets/Postman.png";
import workbench from "../assets/workbench.jpg";
import autres from "../assets/autres1.png";

function Experience(props) {
  const { lightMode } = props;

  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 7, src: javascript, title: "Javascript", style: "shadow-pink-400" },
    { id: 3, src: Express, title: "Express", style: "shadow-yellow-500" },
    { id: 4, src: react, title: "React", style: "shadow-blue-600" },
    { id: 5, src: Node, title: "NodeJs", style: "shadow-sky-400" },
    { id: 6, src: GitHub, title: "GitHub", style: "shadow-white" },
    { id: 8, src: tailwind, title: "Tailwind CSS", style: "shadow-gray-400" },
    { id: 9, src: materialUi, title: "Material UI", style: "shadow-cyan-500" },
    { id: 10, src: Postman, title: " Postman", style: "shadow-red-200" },
    {
      id: 11,
      src: workbench,
      title: "Workbench MySql",
      style: "shadow-orange-200",
    },
    {
      id: 12,
      src: autres,
      title: "Autres technologies",
      style: "shadow-cyan-800",
    },
  ];

  const containerClassName = lightMode
    ? "bg-gradient-to-b from-cyan-500 via-cyan-700 to-cyan-900"
    : "bg-gradient-to-b from-gray-800 to-black text-white";
  const titleClassName = lightMode ? "text-black" : "text-white";
  const subtitleClassName = lightMode ? "text-gray-900" : "text-gray-500";

  return (
    <div
      id="experience"
      name="experience"
      className={`${containerClassName} w-full min-h-screen flex flex-col items-center justify-center`}
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div>
          <p
            className={`text-4xl font-bold font-larken border-b-4 border-gray-500 p-2 inline ${titleClassName}`}
          >
            Experience
          </p>
          <p className={`py-6 font-semplicita ${subtitleClassName}`}>
            Technologies utilisées ...
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex-1 shadow-md hover:scale-105 bg-zinc-700 duration-700 py-2 rounded-lg ${style} md:w-44 md:h-44 w-24 h-24 mx-auto m-4`}
            >
              <img
                src={src}
                alt={title}
                className="w-full h-full aspect-w-1 aspect-h-1 mx-auto"
              />
              <p className="text-white mt-4 font-semplicita">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
