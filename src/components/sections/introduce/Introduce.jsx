import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../../../utils/motion";
import SectionWrapper from "../../hoc";

import { introduce } from "../../../constants";

import classes from "./Introduce.module.css";
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------
const Introduce = () => {
  return (
    <div className={classes["introduce-section"]}>
      <div className={"sections-wrapper"}>
        <motion.h2
          className="sections-title"
          variants={fadeIn("right", 0.3, 1)}
        >
          {introduce.title}
        </motion.h2>
        <div className={classes["introduce-content-wrapper"]}>
          <div className={classes["description"]}>
            {introduce.description.map((content, index) => (
              <motion.p
                key={index}
                className="sections-paragraphe"
                variants={fadeIn("left", 0.5 * (index + 1), 1)}
              >
                {content}
              </motion.p>
            ))}
          </div>
          <motion.img
            src={introduce.introduceImg}
            alt="portre of Simko-Nagy Tamás"
            variants={fadeIn("right", 0.3, 1)}
            className={classes["portre-img"]}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Introduce, "introduce");
