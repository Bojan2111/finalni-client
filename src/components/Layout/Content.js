import React, { useState } from "react";
import AuthContext from "../../store/auth-context";
import UserHeader from "../user/UserHeader";
import Paketi from "../paket/Paketi";

const Content = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const loggedInStatusHandler = (status) => {
    setLoggedIn(status);
  };

  return (
    <main>
      <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
        <UserHeader loggedStatus={loggedInStatusHandler} />
        <div>Something goes here</div>
        <div>
          <h3>And something here</h3>
        </div>
        <Paketi loggedStatus={loggedIn} />
      </AuthContext.Provider>
    </main>
  );
};

export default Content;
