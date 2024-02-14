import React from "react";
import { motion } from "framer-motion";

import SectionWrapper from "../../hoc";
import classes from "./Essential.module.css";
import { fadeIn } from "../../../utils/motion";
import { essential } from "../../../constants";

//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------

const Essential = () => {
  return (
    <div className={classes["essential-section"]}>
      <div className={"sections-wrapper"}>
        <motion.h2
          className="sections-title"
          variants={fadeIn("right", 0.3, 1)}
        >
          {essential.title}
        </motion.h2>
        <div className={classes["description"]}>
          {essential.description.map((content, index) => (
            <motion.p
              key={index}
              className="sections-paragraphe"
              variants={fadeIn("left", 0.5 * (index + 1), 1)}
            >
              {content}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Essential, "essential");
