import React, { useState } from "react";
import UserLogin from "./UserLogin";
import classes from "./UserHeader.module.css";

const UserHeader = (props) => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const loginBtnHandler = () => {
    setShowLogin(true);
  };

  const userLogInStatusHandler = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
    props.loggedStatus(isLoggedIn);
  };

  const userLogOutStatusHandler = () => {
    setUsername("");
    setIsLoggedIn(false);
    props.loggedStatus(isLoggedIn);
  };

  const closeLoginHandler = () => {
    setShowLogin(false);
  };

  return (
    <div className={classes["user-header-container"]}>
      <div>
        <h3 className={classes["user-title"]}>
          {isLoggedIn ? `Welcome ${username}` : "You are not logged in"}!
        </h3>
        {!isLoggedIn && (
          <p className={classes["not-logged-in-text"]}>
            Click on the login button to proceed
          </p>
        )}
      </div>
      {!isLoggedIn && <button onClick={loginBtnHandler}>Log In</button>}
      {isLoggedIn && <button onClick={userLogOutStatusHandler}>Log Out</button>}
      {showLogin && (
        <UserLogin
          onLogin={userLogInStatusHandler}
          onClose={closeLoginHandler}
        />
      )}
    </div>
  );
};

export default UserHeader;
