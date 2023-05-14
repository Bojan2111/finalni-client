import React, { useState } from "react";
import UserHeader from "../user/UserHeader";
import Paketi from "../paket/Paketi";

const Content = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const loggedInStatusHandler = (status) => {
    setLoggedIn(status);
  };

  return (
    <main>
      <UserHeader loggedStatus={loggedInStatusHandler} />
      <div>Something goes here</div>
      <div>
        <h3>And something here</h3>
      </div>
      <Paketi loggedStatus={loggedIn} />
    </main>
  );
};

export default Content;
