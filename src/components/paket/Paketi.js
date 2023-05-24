import React, { useEffect, useState, useContext, useCallback } from "react";
import { AuthContext } from "../../store/auth-context";
import { PaketContext } from "../../store/paket-context";
import ApiData from "../../api/ApiData";
import PaketForm from "./PaketForm";
import Card from "../UI/Card";
import Table from "../UI/Table";
import classes from "./Paketi.module.css";

const Paketi = () => {
  const [data, setData] = useState([]);
  const { jwt_token } = useContext(AuthContext);
  const { tableHeaders, showAllTableHeaders, showSomeTableHeaders } =
    useContext(PaketContext);

  // const showTableHeader = () => {
  //   if (jwt_token !== undefined) {
  //     showAllTableHeaders();
  //     return;
  //   } else {
  //     showSomeTableHeaders();
  //     return;
  //   }
  // };

  useEffect(() => {
    let url = ApiData.baseUrl + ApiData.paketi;
    let headers = { "Content-Type": "application/json" };
    if (jwt_token !== undefined) {
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
            // useCallback(showTableHeader());
            if (jwt_token !== undefined) {
              showAllTableHeaders();
            } else {
              showSomeTableHeaders();
            }
            setData(data);
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
      <Table headers={tableHeaders} data={data} />
      {jwt_token !== undefined && <PaketForm />}
    </Card>
  );
};

export default Paketi;
