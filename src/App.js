import React from "react";
import Header from "./components/Layout/Header";
import Content from "./components/Layout/Content";

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
      <Content />
    </div>
  );
}

export default App;
