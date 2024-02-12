import React from "react";
import { motion } from "framer-motion";

//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
