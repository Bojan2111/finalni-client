import React, { useState } from "react";
import WebsiteTitle from "./WebsiteTitle";
import Navbar from "./Navbar";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <WebsiteTitle titleData={props.headerData.titleData} />
      <Navbar navData={props.headerData.navData} />
    </header>
  );
};

export default Header;
