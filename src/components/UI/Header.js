import React, { useState } from "react";

import logo from "../../img/kurirska-sluzba.png";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes["website-title"]}>
        <div className={classes["image-container"]}>
          <img className={classes.image} src={logo} alt="delivery van" />
        </div>
        <div className={classes["title-container"]}>
          <h2 className={classes.title}>Kurirska Sluzba</h2>
          <p className={classes.subtitle}>.NET WebDev finalni test</p>
        </div>
      </div>
      <nav className={classes.navbar}>
        <div className={classes["navbar__item"]}>Home</div>
        <div className={classes["navbar__item"]}>About</div>
        <div className={classes["navbar__item"]}>Contact</div>
      </nav>
    </header>
  );
};

export default Header;
