import React from "react";
import { motion } from "framer-motion";

import SectionWrapper from "../../hoc";
import { fadeIn } from "../../../utils/motion";

import classes from "./Touch.module.css";
import { touch } from "../../../constants";
//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------
const Touch = () => {
  return (
    <div className={classes["touch-section"]}>
      <div className={"sections-wrapper"}>
        <motion.h2
          className={`${classes["title-center"]}`}
          variants={fadeIn("right", 0.3, 1)}
        >
          {touch.title}
        </motion.h2>
        <div className={classes["description"]}>
          {touch.items.map((content, index) => (
            <motion.div
              key={index}
              className={classes["content"]}
              variants={fadeIn("left", 0.5 * (index + 1), 1)}
            >
              <h3>{content.subTitle}</h3>
              <p>{content.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Touch, "touch");
