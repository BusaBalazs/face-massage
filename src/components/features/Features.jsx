import React from "react";
import { motion } from "framer-motion";

import SectionWrapper from "../hoc";
import { fadeIn } from "../../utils/motion";

import classes from "./Features.module.css";

import { features } from "../../constants";
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------

const FeaturesCard = ({ title, img, index }) => {
  return (
    <div>
      <motion.div variants={fadeIn("up", 0.5 * index, 1)}>
        <img src={img} alt={title} />
        <p>{title}</p>
      </motion.div>
    </div>
  );
};
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------

const Features = () => {
  return (
    <>
      <h2>Tudjon meg többet szolgáltatásomról!</h2>
      {features.map((feature, index) => (
        <FeaturesCard
          key={index}
          title={feature.title}
          img={feature.img}
          index={index}
        />
      ))}
    </>
  );
};

export default SectionWrapper(Features, "features");
