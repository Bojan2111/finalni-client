import React from "react";

const TableHeader = (props) => {
  return (
    <thead>
      <tr key={"header"}>
        {props.headers.map((item) => (
          <td key={item}>{item}</td>
        ))}
        {props.isLoggedIn && <td>Akcija</td>}
      </tr>
    </thead>
  );
};

export default TableHeader;
