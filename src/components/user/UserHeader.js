import React, { useState } from "react";
import UserLogin from "./UserLogin";

const UserHeader = () => {
  const [showLogin, setShowLogin] = useState(false);

  const loginBtnHandler = () => {
    setShowLogin(true);
  };

  const closeLoginHandler = () => {
    setShowLogin(false);
  };

  return (
    <div>
      <div>Here is the user info if it is logged or not</div>
      <button onClick={loginBtnHandler}>Log in</button>
      {showLogin && <UserLogin onClose={closeLoginHandler} />}
    </div>
  );
};

export default UserHeader;
