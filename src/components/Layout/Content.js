import React from "react";
import AuthProvider from "../../store/auth-context";
import PaketProvider from "../../store/paket-context";
import UserHeader from "../user/UserHeader";
import Paketi from "../paket/Paketi";

const Content = () => {
  return (
    <main>
      <AuthProvider>
        <PaketProvider>
          <UserHeader />
          <div>Something goes here</div>
          <div>
            <h3>And something here</h3>
          </div>
          <Paketi />
        </PaketProvider>
      </AuthProvider>
    </main>
  );
};

export default Content;
