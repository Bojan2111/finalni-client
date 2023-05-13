import React, { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./UserLogin.module.css";

const UserLogin = (props) => {
  const [isRegisterFormShown, setIsRegisterFormShown] = useState(false);
  const [isLoginFormShown, setIsLoginFormShown] = useState(true);

  const showLoginHandler = () => {
    setIsRegisterFormShown(false);
    setIsLoginFormShown(true);
  };

  const showRegisterHandler = () => {
    setIsLoginFormShown(false);
    setIsRegisterFormShown(true);
  };

  const loginModalContent = <div>Here is Login</div>;
  const registerModalContent = <div>Here is Register</div>;

  return (
    <Modal onClose={props.onClose}>
      {isRegisterFormShown && registerModalContent}
      {isLoginFormShown && loginModalContent}
      <div>
        <div>
          <button
            className={isLoginFormShown ? classes.active : ""}
            onClick={showLoginHandler}
          >
            Login
          </button>
          <button
            className={isRegisterFormShown ? classes.active : ""}
            onClick={showRegisterHandler}
          >
            Register
          </button>
        </div>
        <button onClick={props.onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default UserLogin;
