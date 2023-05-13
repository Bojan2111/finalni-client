import React from "react";
import Header from "./components/UI/Header";
import logo from "./img/kurirska-sluzba.png";

const headerData = {
  titleData: {
    title: "Kurirska Sluzba",
    subtitle: ".NET WebDev finalni test",
    image: {
      src: logo,
      alt: "delivery van",
    },
  },
  navData: ["Home", "About", "Contact"],
};

function App() {
  return (
    <div>
      <Header headerData={headerData} />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
