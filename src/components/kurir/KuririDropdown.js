import React, { useEffect, useContext } from "react";
import ApiData from "../../api/ApiData";
import { AuthContext } from "../../store/auth-context";
import { PaketContext } from "../../store/paket-context";

const KuririDropdown = () => {
  const { jwt_token } = useContext(AuthContext);
  const { paketValues, paketFuncs } = useContext(PaketContext);

  useEffect(() => {
    let url = ApiData.baseUrl + ApiData.kuriri;
    let headers = {};
    if (jwt_token) {
      headers.Authorization = "Bearer " + jwt_token;
    }
    fetch(url, { headers: headers })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => paketFuncs.showKuriri(data));
        } else {
          console.log("Error occured with code " + response.status);
        }
      })
      .catch((error) => console.log(error));
  }, [jwt_token]);

  return (
    <div>
      <select>
        {paketValues.kuriri.map((item) => (
          <option
            key={item.id}
            selected={paketValues.tempData.kurirId === item.id}
          >
            {item.ime}
          </option>
        ))}
      </select>
    </div>
  );
};

export default KuririDropdown;
