import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { phone } from "../../assets";
import classes from "./BackToTop.module.css";
//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
const BackToTop = ({ isMobile }) => {
  const [isScrollTop, setIsScrollTop] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    const content = document.getElementById("content");

    const footerTopPos = footer.offsetTop;

    const handleScroll = () => {
      if (window.scrollY > 700) {
        setIsScrollTop(true);
      } else {
        setIsScrollTop(false);
      }

      if (isMobile && window.scrollY + window.innerHeight > footerTopPos) {
        content.style.position = "static";
      } else {
        content.style.position = "fixed";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const isClass = () =>
    isScrollTop === false
      ? `${classes["to-top-hide"]}`
      : `${classes["to-top-show"]}`;

  return (
    <Link
      to="/"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <div
        id="content"
        className={`${isClass()} ${classes["content-wrapper"]}`}
      >
        <img src={phone} alt="phone icon" className={classes["callback-img"]} />
        <div className={classes["text"]}>
          <span>Időpont </span>
          <span>foglalás</span>
        </div>
      </div>
    </Link>
  );
};

export default BackToTop;
