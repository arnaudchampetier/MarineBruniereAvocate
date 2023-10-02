import React, { useState, useEffect } from "react";
import { Link, scroller } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoKevinWhite from "../assets/logoepure3.png";
import "./NavBar.css";

function NavBar() {
  const [nav, setNav] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1023);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const links = [
    { id: 1, link: "Accueil", target: "home" },
    { id: 2, link: "Le cabinet", target: "cabinet" },
    { id: 3, link: "Domaines de compétences", target: "domaines" },
    { id: 4, link: "Honoraires", target: "honoraires" },
    { id: 5, link: "Contact", target: "contact" },
  ];

  const handleNavToggle = (target) => {
    setNav(!nav);

    if (!nav && isLargeScreen) {
      scroller.scrollTo(target, {
        duration: 1000,
        smooth: true,
        offset: -70,
      });
    }
  };

  const handleSectionClick = (target) => {
    handleNavToggle();
    scroller.scrollTo(target, {
      duration: 1000,
      smooth: true,
      offset: -70,
    });
  };

  return (
    <div className="relative z-50 opacity-90">
      <div className="flex justify-between items-center w-full h-32 px-4 text-white bg-gray-900 fixed font-trebuc">
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
              className="md:h-28 md:w-28 h-32 w-32 py-4 px-4 ml-8 cursor-pointer"
            />
          </Link>
        </div>
        <ul
          className={`lg:flex mr-4 2xl:mr-24 ${
            isMenuVisible || (nav && !isLargeScreen)
              ? "flex flex-col justify-center items-center space-y-12 text-lg md:text-3xl font-trebuc absolute top-0 left-0 w-full h-screen bg-yellow-950 p-8"
              : "hidden"
          }`}
        >
          <li className="flex justify-end mb-4">
            {nav && (
              <div className="cursor-pointer" onClick={handleNavToggle}></div>
            )}
          </li>

          {links.map(({ id, link, target }) => (
            <li
              key={id}
              className="px-4 lg:px-3 cursor-pointer font-trebuc font-semibold uppercase text-xl  custom-color hover-scale-105 duration-300"
              onClick={() => handleSectionClick(target)}
            >
              <span>{link}</span>
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
