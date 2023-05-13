import React from "react";

import classes from "./WebsiteTitle.module.css";

const WebsiteTitle = (props) => {
  return (
    <div className={classes["website-title"]}>
      <div className={classes["image-container"]}>
        <img
          className={classes.image}
          src={props.titleData.image.src}
          alt={props.titleData.image.alt}
        />
      </div>
      <div className={classes["title-container"]}>
        <h2 className={classes.title}>{props.titleData.title}</h2>
        <p className={classes.subtitle}>{props.titleData.subtitle}</p>
      </div>
    </div>
  );
};

export default WebsiteTitle;
