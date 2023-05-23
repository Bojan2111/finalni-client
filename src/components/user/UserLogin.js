import React, { useState, useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import ApiData from "../../api/ApiData";
import Modal from "../UI/Modal";
import LoginRegisterToggler from "./LoginRegisterToggler";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const UserLogin = (props) => {
  const [isLoginFormShown, setIsLoginFormShown] = useState(true);
  const [isRegisterFormShown, setIsRegisterFormShown] = useState(false);
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const { isLoggedIn, login, createJwt } = useContext(AuthContext);

  const showLoginHandler = () => {
    setIsRegisterFormShown(false);
    setIsLoginFormShown(true);
  };

  const showRegisterHandler = () => {
    setIsLoginFormShown(false);
    setIsRegisterFormShown(true);
  };

  const confirmLoginHandler = (userData) => {
    let url = ApiData.baseUrl + ApiData.login;
    const sendData = {
      Username: userData.username,
      Password: userData.password,
    };

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sendData),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Successful login");
          response.json().then(function (data) {
            createJwt(data.token);
            login(data.username);
          });
        } else {
          console.log("Error occured with code " + response.status);
          alert("Error occured!");
          response.text().then((text) => {
            console.log(text);
          });
        }
      })
      .catch((error) => console.log(error));
    props.onClose();
  };

  const confirmRegisterHandler = (userData) => {
    let url = ApiData.baseUrl + ApiData.register;
    let sendData = {
      Username: userData.username,
      Email: userData.email,
      Password: userData.password,
    };

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sendData),
    })
      .then((response) => {
        if (response.status === 200) {
          setIsRegisterSuccess(true);
          setIsLoginFormShown(true);
          setIsRegisterFormShown(false);
        } else {
          console.log("Error occured with code " + response.status);
          alert("Desila se greska!");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Modal onClose={props.onClose}>
      <LoginRegisterToggler
        isLogin={isLoggedIn}
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
