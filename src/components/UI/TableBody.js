import React from "react";

const TableBody = (props) => {
  return (
    <tbody>
      {props.data.map((item, index) => {
        console.log("Item :", item.id);
        return (
          <tr key={item.id}>
            {Object.entries(item).map((entry) => {
              return (
                <td key={entry[0]}>
                  <span>{entry[1]}</span>
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
    // <tbody>
    //   {props.data.map((item) => (
    //     <tr>
    //       {props.children}
    //       {/* <td>{item.id}</td>
    //       <td>{item.ime}</td>
    //       <td>{item.rodjenje}</td> */}
    //       {props.isLoggedIn && (
    //         <td>
    //           <button>Delete</button>
    //         </td>
    //       )}
    //     </tr>
    //   ))}
    // </tbody>
  );
};

export default TableBody;
