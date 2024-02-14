import { delay } from "framer-motion";

export const fadeIn = (direction, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: delay,
        duration: duration,
      },
    },
  };
};

export const staggerContainer = () => {
  return {
    hidden: {},
    show: {},
  };
};
