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

  const confirmLoginHandler = (userData) => {
    console.log(
      `We received following data:\n` +
        `Username: ${userData.username}\n` +
        `Password: ${userData.password}`
    );
  };

  const confirmRegisterHandler = (userData) => {
    console.log(
      `We received following data:
        Username: ${userData.username}
        Email: ${userData.email}
        Password: ${userData.password}
        Confirmed password: ${userData.repeatPassword}`
    );
  };

  return (
    <Modal onClose={props.onClose}>
      <LoginRegisterToggler
        isLogin={isLoginFormShown}
        showLogin={showLoginHandler}
        showRegister={showRegisterHandler}
      />
      {isRegisterFormShown && (
        <RegisterForm
          onConfirm={confirmRegisterHandler}
          onCancel={props.onClose}
        />
      )}
      {isLoginFormShown && (
        <LoginForm onConfirm={confirmLoginHandler} onCancel={props.onClose} />
      )}
    </Modal>
  );
};

export default UserLogin;
