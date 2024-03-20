import React from "react";
import { Link } from "react-router-dom";

import { facebook } from "../../assets";
import classes from "./Footer.module.css";

//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <div className={classes["footer-date"]}>
        <a href="https://www.facebook.com/profile.php?id=61557164254150" target="_blank">
          <img
            className={classes["social-media-logo"]}
            src={facebook}
            alt="facebook logo"
          />
        </a>
        <small>Simkó-Nagy Tamás | {date}.</small>
      </div>
      <Link
        to="/"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <div className={classes["logo-wrapper"]}>
          <div className={classes["logo-decor-wrapper"]}>
            <div
              className={`${classes["logo-decor"]} ${classes["logo-decor-one"]}`}
            />
            <div className={`${classes["logo-decor"]}`} />
            <div
              className={`${classes["logo-decor"]} ${classes["logo-decor-two"]}`}
            />
            <div className={`${classes["logo-decor"]}`} />
            <div
              className={`${classes["logo-decor"]} ${classes["logo-decor-three"]}`}
            />
          </div>
          <span className={classes["logo-text"]}>Arcmasszázs</span>
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
