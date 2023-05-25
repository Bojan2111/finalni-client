import React, { useState, createContext } from "react";

const loggedOutHeaders = ["Posiljalac", "Primalac", "Tezina", "Postarina"];
const initialTempData = {
  id: 0,
  posiljalac: "",
  primalac: "",
  tezina: 0,
  postarina: 0,
  kurirId: 0,
};

const PaketProvider = ({ children }) => {
  // proveri u radu aplikacije da li radi ako state inicijalno vezes za loggedOutHeaders
  const [tableHeaders, setTableHeaders] = useState([
    "Posiljalac",
    "Primalac",
    "Tezina",
    "Postarina",
  ]);
  // const [tableHeaders, setTableHeaders] = useState(loggedOutHeaders);
  const [httpAction, setHttpAction] = useState("");
  const [kuriri, setKuriri] = useState([]);

  // ovo koristi za privremene podatke u svrhe editovanja paketa.
  const [tempData, setTempData] = useState(initialTempData);

  const showAllTableHeaders = () => {
    setTableHeaders((prevTableHeaders) => {
      return [...prevTableHeaders, "Kurir"];
    });
  };

  const showSomeTableHeaders = () => {
    setTableHeaders(loggedOutHeaders);
  };
  // to je za dropdown
  const showKuriri = (kuririArr) => {
    setKuriri(kuririArr);
  };
  // ovo mozda nece trebati...
  const hideKuriri = () => {
    setKuriri([]);
  };

  const createTempData = (data) => {
    setTempData(data);
  };

  const clearTempData = () => {
    setTempData(initialTempData);
  };

  const toggleCreateEditAction = (value) => {
    if (value === "create") {
      setHttpAction("POST");
    } else if (value === "edit") {
      setHttpAction("PUT");
    } else {
      setHttpAction("");
    }
  };

  const sendEditId = (id) => {
    setTempData((prevTempData) => ({ ...prevTempData, id: id }));
  };

  return (
    <PaketContext.Provider
      value={{
        paketValues: {
          kuriri,
          tableHeaders,
          httpAction,
          tempData,
        },
        paketFuncs: {
          showAllTableHeaders,
          showSomeTableHeaders,
          showKuriri,
          hideKuriri,
          createTempData,
          clearTempData,
          toggleCreateEditAction,
          sendEditId,
        },
      }}
    >
      {children}
    </PaketContext.Provider>
  );
};

export default PaketProvider;
export const PaketContext = createContext();
