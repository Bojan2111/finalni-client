import React from "react";
import DummyData from "../../DummyData";
import Card from "../UI/Card";
import Table from "../UI/Table";

const Paketi = (props) => {
  const headers = [
    "Id",
    "Posiljalac",
    "Primalac",
    "Tezina",
    "Postarina",
    "Kurir ID",
  ];

  return (
    <Card>
      <h2>Prikaz svih paketa</h2>
      <Table
        isLoggedIn={props.loggedStatus}
        headers={headers}
        data={DummyData.paketi}
      />
    </Card>
  );
};

export default Paketi;
