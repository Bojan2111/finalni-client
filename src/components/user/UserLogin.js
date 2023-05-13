import React, { useState } from "react";
import Modal from "../UI/Modal";
import LoginRegisterToggler from "./LoginRegisterToggler";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

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
      <LoginRegisterToggler
        isLogin={isLoginFormShown}
        showLogin={showLoginHandler}
        showRegister={showRegisterHandler}
      />
      {isRegisterFormShown && <RegisterForm />}
      {isLoginFormShown && <LoginForm />}
      <div>
        <button onClick={props.onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default UserLogin;
