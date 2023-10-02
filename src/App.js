import React from "react";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import DomaineCompetences2 from "./components/DomainesCompetences2";
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";
import Valeurs from "./components/Valeurs";
import Honoraires from "./pages/Honoraires";
import FlippableCard from "./components/FlippableCard";
import CardFlipTest from "./components/CardFlipTest";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className=" z-90">
        <NavBar />
      </div>

      <Home />
      <Presentation />
      <DomaineCompetences2 />
      <Valeurs />
      <Honoraires />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
