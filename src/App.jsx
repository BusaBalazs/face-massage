import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Header, Hero, Features } from "./components";

//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
const App = () => {
  return <BrowserRouter>
    <Header />
    <Hero />
    <Features />
  </BrowserRouter>;
};

export default App;
