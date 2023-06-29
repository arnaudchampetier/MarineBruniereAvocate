import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import LogoKevinWhite from "../assets/logoKevinWhite.svg";

function NavBar() {
  const [nav, setNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const links = [
    { id: 1, link: "Accueil" },
    { id: 2, link: "Domaines de compétences" },
    { id: 3, link: "Le cabinet" },
    { id: 4, link: "Honoraires" },
    { id: 5, link: "Actualités" },
    { id: 6, link: "Contact" },
  ];

  const dropdownItems = [
    "Discipline",
    "Accident du service / Maladies professionnelles",
    "Carrière",
    "Rémunération",
    "Protection fonctionnelle",
    "Harcèlement moral",
  ];

  return (
    <div className="relative z-50">
      <div className="flex justify-between items-center w-full h-24 px-4 text-white bg-blue-950 fixed">
        <div>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <img
              src={LogoKevinWhite}
              alt="Logo Kevin"
              className="md:h-48 md:w-48 h-32 w-32 cursor-pointer"
            />
          </Link>
        </div>
        <ul className="hidden lg:flex mr-12 xl:mr-4">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer font-larken uppercase text-gray-300 hover-scale-105 duration-300"
            >
              {link === "Domaine de compétences" ? (
                <span
                  className={`${
                    window.innerWidth > 1023 ? "lg:whitespace-nowrap" : ""
                  }`}
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <span className="mr-1">Domaine de</span>
                  <span>compétences</span>
                  <FaChevronDown className="inline-block ml-1 text-gray-300" />

                  {showDropdown && (
                    <ul className="absolute left-0 ml-0 w-96 mt-7 px-8 bg-gray-900 p-8 rounded-md">
                      {dropdownItems.map((item, index) => (
                        <li
                          key={index}
                          className="text-gray-300 hover:text-white cursor-pointer mb-4"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </span>
              ) : (
                <Link
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active"
                >
                  {link}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 lg:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col text-center justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl font-semplicita"
              >
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  onClick={() => setNav(false)} // Ferme le menu burger après le clic
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;
