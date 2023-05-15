import React, { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import Modal from "../UI/Modal";
import LoginRegisterToggler from "./LoginRegisterToggler";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const UserLogin = (props) => {
  const [isLoginFormShown, setIsLoginFormShown] = useState(true);
  const [isRegisterFormShown, setIsRegisterFormShown] = useState(false);
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const ctx = useContext(AuthContext);

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
    props.onLogin(userData.username);
    props.onClose();
  };

  const confirmRegisterHandler = (userData) => {
    console.log(
      `We received following data:
        Username: ${userData.username}
        Email: ${userData.email}
        Password: ${userData.password}
        Confirmed password: ${userData.repeatPassword}`
    );
    setIsRegisterSuccess(true);
    setIsLoginFormShown(true);
    setIsRegisterFormShown(false);
  };

  return (
    <Modal onClose={props.onClose}>
      <LoginRegisterToggler
        isLogin={ctx.isLoggedIn}
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
        <LoginForm
          onConfirm={confirmLoginHandler}
          onCancel={props.onClose}
          isRegistered={isRegisterSuccess}
        />
      )}
    </Modal>
  );
};

export default UserLogin;
