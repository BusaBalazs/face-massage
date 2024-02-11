import React from "react";

import classes from "./Hero.module.css";

import { ContactForm } from "../../components";
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes["hero-title-wrapper"]}>
        <h2>日本若返りフェイシャルマッサージ</h2>
        <h1>Japán arcfiatalító masszázs az ön otthonában.</h1>
      </div>
      <ContactForm />
    </section>
  );
};

export default Hero;
