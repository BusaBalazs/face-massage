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
    <motion.div className={classes}>
      <div className={classes["card-img-wrapper"]}>
        <img
          src={img}
          alt="Illustration of nassage"
          className={classes["price-card-img"]}
        />
      </div>
      <div className={classes["price-contents"]}>
        <p>{description}</p>
        <p>{time}</p>
        <p>{price}</p>
      </div>
    </motion.div>
  );
};

const Prices = ({ isMobile }) => {
  const delay = (index) => {
    return isMobile ? 0.5 : 0.3 * index;
  };

  return (
    <>
      <section id="price" className={classes["price-section"]}>
        <ul className={classes["price-cards-wrapper"]}>
          {prices.map((price, index) => (
            <motion.li
              variants={fadeIn("up", `${delay(index)}`, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              key={index}
              className={`${
                classes["card-content-wrapper"]
              } ${"section-green"}`}
            >
              <PriceCard
                delay={delay}
                description={price.description}
                price={`${price.prices} ft`}
                {...price}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Prices;
