import React, { useState, useRef } from "react";
import classes from "./RegisterForm.module.css";

const usernamePattern =
  /^(?=.{3,32}$)(?![_.-])(?!.*[_.]{2})[a-zA-Z0-9._-]+(?<![_.])$/;
const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const passwordPattern =
  /^(?=(?:.*[A-Z]){1,})(?=(?:.*[a-z]){1,})(?=(?:.*\d){1,})(?=(?:.*[!@#$%^&*()\-_=+{};:,<.>]){1,})(?!.*(.)\1{})([A-Za-z0-9!@#$%^&*()\-_=+{};:,<.>]{6,20})$/;
const isEmpty = (value) => value.trim() === "";
const isValidUsername = (value) => usernamePattern.test(value.trim());
const isValidEmail = (value) => emailPattern.test(value.trim());
const isValidPassword = (value) => passwordPattern.test(value.trim());
const passwordsMatch = (firstValue, secondValue) => firstValue === secondValue;

const RegisterForm = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    username: true,
    email: true,
    password: true,
    repeatPassword: true,
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const repeatPasswordInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredUsername = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredRepeatPassword = repeatPasswordInputRef.current.value;

    const enteredUsernameIsValid = isValidUsername(enteredUsername);
    const enteredEmailIsValid = isValidEmail(enteredEmail);
    const enteredPasswordIsValid = isValidPassword(enteredPassword);
    const enteredRepeatPasswordIsValid =
      !isEmpty(enteredRepeatPassword) &&
      passwordsMatch(enteredPassword, enteredRepeatPassword);

    setFormInputsValidity({
      username: enteredUsernameIsValid,
      email: enteredEmailIsValid,
      password: enteredPasswordIsValid,
      repeatPassword: enteredRepeatPasswordIsValid,
    });

    const formIsValid =
      enteredUsernameIsValid &&
      enteredEmailIsValid &&
      enteredPasswordIsValid &&
      enteredRepeatPasswordIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      username: enteredUsername,
      email: enteredEmail,
      password: enteredPassword,
      repeatPassword: enteredRepeatPassword,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.username ? "" : classes.invalid
  }`;
  const emailControlClasses = `${classes.control} ${
    formInputsValidity.email ? "" : classes.invalid
  }`;
  const passwordControlClasses = `${classes.control} ${
    formInputsValidity.password ? "" : classes.invalid
  }`;
  const repeatPasswordControlClasses = `${classes.control} ${
    formInputsValidity.repeatPassword ? "" : classes.invalid
  }`;

  return (
    <div className={classes["register-container"]}>
      <form onSubmit={confirmHandler}>
        <div className={nameControlClasses}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={nameInputRef} />
          {!formInputsValidity.username && (
            <p>Please enter a valid username!</p>
          )}
        </div>
        <div className={emailControlClasses}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailInputRef} />
          {!formInputsValidity.email && <p>Please enter a valid email!</p>}
        </div>
        <div className={passwordControlClasses}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordInputRef} />
          {!formInputsValidity.password && (
            <p>Please enter a valid password!</p>
          )}
        </div>
        <div className={repeatPasswordControlClasses}>
          <label htmlFor="repeatPassword">Repeat password</label>
          <input
            type="password"
            id="repeatPassword"
            ref={repeatPasswordInputRef}
          />
          {!formInputsValidity.repeatPassword && <p>Passwords must match!</p>}
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button className={classes.submit}>Confirm</button>
        </div>
      </form>
      <div className={classes.instructions}>
        <h3 className={classes["instructions-title"]}>Register Instructions</h3>
        <p>Please follow these requirements:</p>
        <ul>
          <li>
            Username must be between 3 and 32 characters, can contain letters,
            numbers and ".", "_" or "-".
          </li>
          <li>
            Password must be between 6 and 20 characters, must contain at least
            one UPPERCASE, one lowercase character, one number and one special
            character {"!@#$%^&*()-_=+{};:,<.>"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RegisterForm;
