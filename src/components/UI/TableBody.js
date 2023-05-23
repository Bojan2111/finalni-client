import React, { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

const TableBody = (props) => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <tbody>
      {props.data.map((item) => {
        return (
          <tr key={item.id}>
            {Object.entries(item).map((entry) => {
              return (
                !(entry[0] === "id") &&
                !(!isLoggedIn && entry[0] === "kurirIme") && (
                  <td key={entry[0]}>
                    <span>{entry[1]}</span>
                  </td>
                )
              );
            })}

            {isLoggedIn && (
              <td>
                <button>Brisanje</button>
              </td>
            )}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
