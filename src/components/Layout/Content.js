import React from "react";
import AuthProvider from "../../store/auth-context";
import UserHeader from "../user/UserHeader";
import Paketi from "../paket/Paketi";

const Content = () => {
  return (
    <main>
      <AuthProvider>
        <UserHeader />
        <div>Something goes here</div>
        <div>
          <h3>And something here</h3>
        </div>
        <Paketi />
      </AuthProvider>
    </main>
  );
};

export default Content;
