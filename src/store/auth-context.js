import React, { useState } from "react";

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [jwt_token, setJwt_token] = useState(undefined);

  const login = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setJwt_token(undefined);
  };

  const createJwt = (token) => {
    setJwt_token(token);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        jwt_token,
        username,
        login,
        logout,
        createJwt,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const AuthContext = React.createContext();
