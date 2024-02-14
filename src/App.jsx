import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Header, Hero, Features, Essential, Advantage,Introduce } from "./components";


//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Hero />
        <Features />
        <Essential />
        <Advantage />
      </main>
    </BrowserRouter>
  );
};

export default App;
