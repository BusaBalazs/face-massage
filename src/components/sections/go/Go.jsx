import React from 'react'
import { motion } from "framer-motion";

import SectionWrapper from "../../hoc";
import { fadeIn } from "../../../utils/motion";

import { go } from "../../../constants";
import classes from "./Go.module.css"
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------
const Go = () => {
  return (
    <div className="section-green">
      <div className={"sections-wrapper"}>
        <motion.h2
          className="sections-title"
          variants={fadeIn("right", 0.3, 1)}
        >
          {go.title}
        </motion.h2>
        <div className={classes["description"]}>
          {go.items.map((content, index) => (
            <motion.div
              key={index}
              className={classes["go-content"]}
              variants={fadeIn("left", 0.5 * (index + 1), 1)}
            >
              <h3>{content.subTitle}</h3>
              <p>{content.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Go, "go")