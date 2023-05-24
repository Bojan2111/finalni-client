import React, { useState, createContext } from "react";

const loggedOutHeaders = ["Posiljalac", "Primalac", "Tezina", "Postarina"];

const PaketProvider = ({ children }) => {
  // proveri u radu aplikacije da li radi ako state inicijalno vezes za loggedOutHeaders
  const [tableHeaders, setTableHeaders] = useState([
    "Posiljalac",
    "Primalac",
    "Tezina",
    "Postarina",
  ]);

  const [kuriri, setKuriri] = useState([]);

  // ovo koristi za privremene podatke u svrhe editovanja paketa.
  const [tempData, setTempData] = useState([]);

  const showAllTableHeaders = () => {
    setTableHeaders((prevTableHeaders) => {
      return [...prevTableHeaders, "Kurir"];
    });
  };

  const showSomeTableHeaders = () => {
    setTableHeaders(loggedOutHeaders);
  };
  // to je za dropdown - treba array sa kuriri objektima da primi
  const showKuriri = (kuririArr) => {
    setKuriri(kuririArr);
  };
  // ovo mozda nece trebati...
  const hideKuriri = () => {
    setKuriri([]);
  };

  return (
    <PaketContext.Provider
      value={{
        kuriri,
        tableHeaders,
        showAllTableHeaders,
        showSomeTableHeaders,
        showKuriri,
        hideKuriri,
      }}
    >
      {children}
    </PaketContext.Provider>
  );
};

export default PaketProvider;
export const PaketContext = createContext();
