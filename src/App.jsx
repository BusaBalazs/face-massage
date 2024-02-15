import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Header, Hero, Features, Essential, Advantage, Touch, Go, Introduce } from "./components";


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
        <Touch />
        <Go />
      </main>
    </BrowserRouter>
  );
};

export default App;
