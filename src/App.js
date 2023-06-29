import React from "react";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import DomaineCompetences from "./components/DomainesCompetences";
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";
import Valeurs from "./components/Valeurs";
import Honoraires from "./pages/Honoraires";

function App() {
  return (
    <div>
      <div className=" z-90">
        <NavBar />
      </div>

      <Home />
      <Valeurs />

      <DomaineCompetences />
      <Presentation />
      <Honoraires />
      <Contact />
    </div>
  );
}

export default App;
