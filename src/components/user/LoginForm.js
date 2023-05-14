import React, { useRef, useState } from "react";
import classes from "./LoginForm.module.css";

const isEmpty = (value) => value.trim() === "";
const isValidUsernameLength = (value) =>
  value.trim().length >= 3 && value.trim().length <= 32;
const isValidPasswordLength = (value) =>
  value.trim().length >= 6 && value.trim().length <= 20;

const LoginForm = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    username: true,
    password: true,
  });

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const enteredUsernameIsValid =
      !isEmpty(enteredUsername) && isValidUsernameLength(enteredUsername);
    const enteredPasswordIsValid =
      !isEmpty(enteredPassword) && isValidPasswordLength(enteredPassword);

    setFormInputsValidity({
      username: enteredUsernameIsValid,
      password: enteredPasswordIsValid,
    });

    const formIsValid = enteredUsernameIsValid && enteredPasswordIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      username: enteredUsername,
      password: enteredPassword,
    });
  };

  const usernameControlClasses = `${classes.control} ${
    formInputsValidity.username ? "" : classes.invalid
  }`;
  const passwordControlClasses = `${classes.control} ${
    formInputsValidity.password ? "" : classes.invalid
  }`;

  return (
    <div className={classes["login-container"]}>
      <form onSubmit={confirmHandler}>
        <div className={usernameControlClasses}>
          <label htmlFor="username">Userame</label>
          <input type="text" id="username" ref={usernameInputRef} />
          {!formInputsValidity.username && (
            <p>Please enter a valid username!</p>
          )}
        </div>
        <div className={passwordControlClasses}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordInputRef} />
          {!formInputsValidity.password && (
            <p>Please enter a valid password!</p>
          )}
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button className={classes.submit}>Confirm</button>
        </div>
      </form>
      {!props.isRegistered && (
        <div className={classes.info}>
          <h3 className={classes["info--title"]}>Not registered yet?</h3>
          <p>Just click on "Register" tab and fill out the form.</p>
          <p>
            It's completely <span className={classes["info--free"]}>free!</span>
          </p>
        </div>
      )}
      {props.isRegistered && (
        <div className={classes.info}>
          <h3 className={classes["info--title"]}>You can now log in!</h3>
          <p>
            Fill in the username and password you just entered in register form
            to continue!
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
