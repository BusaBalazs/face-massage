import React from "react";
import { motion } from "framer-motion";

//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section className="hoc">
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="hash-span" id={idName}>
            &nbsp;
          </span>
          
          <Component />
        </motion.section>
      </section>
    );
  };

export default SectionWrapper;
