import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Header, Hero } from "./components";

//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
const App = () => {
  return <BrowserRouter>
    <Header />
    <Hero />
  </BrowserRouter>;
};

export default App;
