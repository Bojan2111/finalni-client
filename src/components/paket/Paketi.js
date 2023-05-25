import React, { useEffect, useState, useContext, useCallback } from "react";
import { AuthContext } from "../../store/auth-context";
import { PaketContext } from "../../store/paket-context";
import ApiData from "../../api/ApiData";
import PaketForm from "./PaketForm";
import Card from "../UI/Card";
import Table from "../UI/Table";
import classes from "./Paketi.module.css";

// const showTableHeader = () => {
//   if (jwt_token !== "") {
//     funcs.showAllTableHeaders();
//   } else {
//     funcs.showSomeTableHeaders();
//   }
// };

// const sendTempData = (data) => {
//   funcs.createTempData(data);
// };

const Paketi = () => {
  const [data, setData] = useState([]);
  const { jwt_token } = useContext(AuthContext);
  const { paketValues, paketFuncs } = useContext(PaketContext);
  useEffect(() => {
    let url = ApiData.baseUrl + ApiData.paketi;
    let headers = { "Content-Type": "application/json" };
    if (jwt_token !== "") {
      headers.Authorization = "Bearer " + jwt_token;
    }
    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Data obtained successfully");
          response.json().then((data) => {
            // showTableHeader();
            if (jwt_token !== "") {
              paketFuncs.showAllTableHeaders();
            } else {
              paketFuncs.showSomeTableHeaders();
            }
            setData(data);
            // paketFuncs.createTempData(data);
          });
        } else {
          console.log("Error occured with code " + response.status);
          alert("Error occured!");
          response.text().then((text) => {
            console.log(text);
          });
        }
      })
      .catch((error) => console.log(error));
  }, [jwt_token]);

  return (
    <Card otherClasses={classes.centerCard}>
      <h2>Prikaz svih paketa</h2>
      <Table headers={paketValues.tableHeaders} data={data} />
      {jwt_token !== "" && <PaketForm />}
    </Card>
  );
};

export default Paketi;
