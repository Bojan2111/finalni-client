import React from "react";
import classes from "./LoginRegisterToggler.module.css";

const LoginRegisterToggler = (props) => {
  return (
    <div className={classes.toggler}>
      <div
        className={`${classes.login} ${
          !props.isLogin ? classes["pointer-cursor"] : ""
        } ${props.isLogin ? classes.active : ""}`}
        onClick={props.showLogin}
      >
        <h3 className={classes.text}>Login</h3>
      </div>
      <div
        className={`${classes.register} ${
          props.isLogin ? classes["pointer-cursor"] : ""
        } ${!props.isLogin ? classes.active : ""}`}
        onClick={props.showRegister}
      >
        <h3 className={classes.text}>Register</h3>
      </div>
    </div>
  );
};

export default LoginRegisterToggler;
