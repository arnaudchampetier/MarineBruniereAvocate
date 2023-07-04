import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import LogoKevinWhite from "../assets/logoKevinWhite.svg";

function NavBar() {
  const [nav, setNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true); // Ajoutez cet état

  useEffect(() => {
    // Écoutez les changements de la largeur de la fenêtre
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1023);
    };

    window.addEventListener("resize", handleResize);

    // N'oubliez pas de nettoyer l'écouteur d'événements
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const handleNavToggle = () => {
    setNav(!nav);
  };

  return (
    <div className="relative z-50">
      <div className="flex justify-between items-center w-full h-24 px-4 text-white bg-yellow-800 fixed">
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
        <ul
          className={`lg:flex mr-4 2xl:mr-24 ${
            nav
              ? " flex flex-col justify-center items-center space-y-12  text-lg md:text-3xl absolute top-0 left-0 w-full h-screen bg-yellow-950 p-8"
              : "hidden"
          }`}
        >
          <li className="flex   justify-end mb-4">
            {nav && (
              <div className="cursor-pointer" onClick={handleNavToggle}></div>
            )}
          </li>

          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 lg:px-3 cursor-pointer font-larken uppercase text-gray-300 hover-scale-105 duration-300"
            >
              {link === "Domaines de compétences" ? (
                <span
                  className={`${isLargeScreen ? "lg:whitespace-nowrap" : ""}`}
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <span className="mr-1">Domaines de</span>
                  <span>compétences</span>
                  {isLargeScreen && (
                    <FaChevronDown className="inline-block ml-1 text-gray-300" />
                  )}

                  {showDropdown && (
                    <ul className="absolute right-124 ml-0 w-104 mt-7 px-8 bg-yellow-900 p-4 rounded-md">
                      {" "}
                      {dropdownItems.map((item, index) => (
                        <li
                          key={index}
                          className="text-gray-300 hover:text-white cursor-pointer mb-2"
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
                  onClick={handleNavToggle}
                >
                  {link}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div
          onClick={handleNavToggle}
          className="cursor-pointer pr-4 z-10 text-gray-500 lg:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
