import React, { Fragment } from "react";
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
    <Fragment>
      <Header headerData={headerData} />
      <Content />
    </Fragment>
  );
}

export default App;
