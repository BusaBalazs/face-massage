import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../../../utils/motion";

import classes from "./Features.module.css";

import { features } from "../../../constants/index";

//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------

const FeaturesCard = ({ title, id, index, delay }) => {
  return (
    <a href={`#${id}`} className={classes.card}>
      <motion.div
        variants={fadeIn("up", `${delay}`, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div
          className={`${classes[`img-bg-${index}`]} ${classes["img-bg"]}`}
        ></div>
        <div className={classes["link-title"]}>
          <p>{title}</p>
        </div>
      </motion.div>
    </a>
  );
};

//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------

const Features = () => {
  const [isMobile, setIsMobile] = useState();

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

  const delay = (index) => {
    return isMobile ? 0.5 : 0.3 * index;
  };

  return (
    <>
      <section className={classes["section-wrapper"]}>
        <ul className={classes["cards-wrapper"]}>
          {features.map((feature, index) => (
            <li key={index} className={classes["content"]}>
              <FeaturesCard
                title={feature.title}
                id={feature.id}
                index={index}
                delay={delay(index)}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Features;
