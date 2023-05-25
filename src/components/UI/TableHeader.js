import React, { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

const TableHeader = (props) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <thead>
      <tr key={"header"}>
        {props.headers.map((item) => (
          <td key={item}>{item}</td>
        ))}
        {isLoggedIn && <td>Izmena</td>}
        {isLoggedIn && <td>Brisanje</td>}
      </tr>
    </thead>
  );
};

export default TableHeader;
