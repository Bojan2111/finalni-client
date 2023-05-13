import React from "react";

import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={classes.navbar}>
      {props.navData.map((data) => (
        <div key={data} className={classes["navbar__item"]}>
          {data}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
