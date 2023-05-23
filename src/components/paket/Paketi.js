import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import ApiData from "../../api/ApiData";
import Card from "../UI/Card";
import Table from "../UI/Table";

const Paketi = () => {
  const [data, setData] = useState([]);
  const { jwt_token, tableHeaders, showAllTableHeaders } =
    useContext(AuthContext);

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
            if (jwt_token !== undefined) {
              showAllTableHeaders();
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
    <Card>
      <h2>Prikaz svih paketa</h2>
      <Table headers={tableHeaders} data={data} />
    </Card>
  );
};

export default Paketi;
