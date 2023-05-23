import React, { useState } from "react";

const loggedOutHeaders = ["Posiljalac", "Primalac", "Tezina", "Postarina"];

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [jwt_token, setJwt_token] = useState(undefined);
  const [tableHeaders, setTableHeaders] = useState([
    "Posiljalac",
    "Primalac",
    "Tezina",
    "Postarina",
  ]);

  const login = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setJwt_token(undefined);
    setTableHeaders(loggedOutHeaders);
  };

  const createJwt = (token) => {
    setJwt_token(token);
  };

  const showAllTableHeaders = () => {
    setTableHeaders((prevTableHeaders) => {
      return [...prevTableHeaders, "Kurir"];
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        jwt_token,
        username,
        tableHeaders,
        login,
        logout,
        createJwt,
        showAllTableHeaders,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const AuthContext = React.createContext();
