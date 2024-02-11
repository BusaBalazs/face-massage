import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

import { menu, close } from "../../assets";
import { navLinks } from "../../constants";

//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className={classes["contact-info"]}>
        <div className={classes["contact-info-content"]}>
          <small>
            Simkó-Nagy Tamás | <a href="tel:+36306219901">+36 30/621-9901</a>
          </small>

          <small>
            <a href="mailto:simko.nagy@gmail.com">simko.nagy@gmail.com</a>
          </small>
        </div>
      </div>

      <header className={classes}>
        <nav className={classes}>
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

          <div className={classes["nav-list-medium"]}>
            <ul className={classes["nav-list"]}>
              {navLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={classes["nav-icon-mobil"]}>
            <div
              className={classes["nav-icon"]}
              onClick={() => setToggle((preState) => !preState)}
            >
              <img
                src={toggle ? close : menu}
                alt={toggle ? "close" : "menu"}
              />
            </div>

            <div
              className={
                toggle ? classes["show-mobile-menu"] : classes["hidden"]
              }
            >
              <ul className={classes["nav-list-mobil"]}>
                {navLinks.map((link) => {
                  return (
                    <li key={link.id} onClick={() => setToggle(false)}>
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  );
                })}
              </ul>

              <div className={classes["contact-info-content"]}>
                <small>
                  <a href="tel:+36306219901">+36 30/621-9901</a>
                </small>

                <small>
                  <a href="mailto:simko.nagy@gmail.com">simko.nagy@gmail.com</a>
                </small>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
