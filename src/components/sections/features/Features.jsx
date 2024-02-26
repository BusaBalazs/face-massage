import React from "react";
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

const Features = ({isMobile}) => {
  
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
                index={index}
                delay={delay(index)}
                {...feature}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Features;
