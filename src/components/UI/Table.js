import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = (props) => {
  return (
    <table border={1}>
      <TableHeader headers={props.headers} />
      <TableBody data={props.data} headers={props.headers} />
    </table>
  );
};

export default Table;
