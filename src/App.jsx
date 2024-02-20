import React, {useState, useEffect} from "react";
import { BrowserRouter } from "react-router-dom";

import {
  Header,
  Hero,
  Features,
  Essential,
  Advantage,
  Touch,
  Go,
  Introduce,
  BackToTop,
  Footer,
} from "./components";

//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQuery = (e) => {
      setIsMobile(mediaQuery.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQuery);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQuery);
    };
  }, []);

  return (
    <BrowserRouter>
      <main>
        <Header />
        <Hero />
        <Features isMobile={isMobile}/>
        <Essential />
        <Advantage />
        <Touch />
        <Go />
        <Introduce />
        <BackToTop isMobile={isMobile}/>
      </main>
        <Footer />
    </BrowserRouter>
  );
};

export default App;
