import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../../../utils/motion";

import { prices } from "../../../constants";

import classes from "./Prices.module.css";
//----------------------------------------------------
//----------------------------------------------------
//----------------------------------------------------

const PriceCard = ({ img, description, time, price }) => {
  return (
    <motion.div>
      <div>
        <img src={img} alt="Illustration of nassage" />
      </div>
      <div>
        <p>{description}</p>
        <p>{time}</p>
        <p>{price}</p>
      </div>
    </motion.div>
  );
};

const Prices = () => {
  const delay = (index) => {
    return isMobile ? 0.5 : 0.3 * index;
  };

  return (
    <>
      <section id="price" className={classes["section-wrapper"]}>
        <ul className={classes["cards-wrapper"]}>
          {prices.map((price, index) => (
            <li key={index} className={classes["content"]}>
              <PriceCard
                img={price.img}
                description={price.description}
                time={price.time}
                price={`${price.prices} ft`}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Prices;
