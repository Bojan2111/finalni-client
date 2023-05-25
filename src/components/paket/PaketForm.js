import React, { useState, useRef, useEffect, useContext } from "react";
import KuririDropdown from "../kurir/KuririDropdown";
import ApiData from "../../api/ApiData";
import { AuthContext } from "../../store/auth-context";
import { PaketContext } from "../../store/paket-context";
import classes from "./PaketForm.module.css";
// import classes from "./RegisterForm.module.css";

const posiljalacPattern =
  /^(?=.{3,32}$)(?![_.-])(?!.*[_.]{2})[a-zA-Z0-9._-]+(?<![_.])$/;
const primalacPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const tezinaPattern =
  /^(?=(?:.*[A-Z]){1,})(?=(?:.*[a-z]){1,})(?=(?:.*\d){1,})(?=(?:.*[!@#$%^&*()\-_=+{};:,<.>]){1,})(?!.*(.)\1{})([A-Za-z0-9!@#$%^&*()\-_=+{};:,<.>]{6,20})$/;
const isEmpty = (value) => value.trim() === "";
const isValidPosiljalac = (value) => posiljalacPattern.test(value.trim());
const isValidPrimalac = (value) => primalacPattern.test(value.trim());
const isValidTezina = (value) => tezinaPattern.test(value.trim());
const isValidPostarina = (value) => value.trim() > 0;

const PaketForm = () => {
  const { paketValues, paketFuncs } = useContext(PaketContext);
  const { jwt_token } = useContext(AuthContext);
  const [formInputsValidity, setFormInputsValidity] = useState({
    posiljalac: true,
    primalac: true,
    tezina: true,
    postarina: true,
  });

  const posiljalacInputRef = useRef();
  const primalacInputRef = useRef();
  const tezinaInputRef = useRef();
  const postarinaInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredPosiljalac = posiljalacInputRef.current.value;
    const enteredPrimalac = primalacInputRef.current.value;
    const enteredTezina = tezinaInputRef.current.value;
    const enteredPostarina = postarinaInputRef.current.value;

    const enteredPosiljalacIsValid = isValidPosiljalac(enteredPosiljalac);
    const enteredPrimalacIsValid = isValidPrimalac(enteredPrimalac);
    const enteredTezinaIsValid = isValidTezina(enteredTezina);
    const enteredPostarinaIsValid =
      !isEmpty(enteredPostarina) && isValidPostarina(enteredPostarina);

    setFormInputsValidity({
      posiljalac: enteredPosiljalacIsValid,
      primalac: enteredPrimalacIsValid,
      tezina: enteredTezinaIsValid,
      postarina: enteredPostarinaIsValid,
    });

    const formIsValid =
      enteredPosiljalacIsValid &&
      enteredPrimalacIsValid &&
      enteredTezinaIsValid &&
      enteredPostarinaIsValid;

    if (!formIsValid) {
      return;
    }

    // useEffect(() => {
    let url = ApiData.baseUrl + ApiData.paketi;
    let httpAction = paketValues.httpAction;
    let editingId = paketValues.tempData.id;
    let kurirId = paketValues.tempData.kurirId;
    let sendData;

    if (httpAction === "POST") {
      // url = baseUrl + paketiEndpoint;
      sendData = {
        posiljalac: enteredPosiljalac,
        primalac: enteredPrimalac,
        tezina: enteredTezina,
        postarina: enteredPostarina,
        kurirId: kurirId,
      };
    } else {
      url += editingId.toString();
      sendData = {
        id: editingId,
        posiljalac: enteredPosiljalac,
        primalac: enteredPrimalac,
        tezina: enteredTezina,
        postarina: enteredPostarina,
        kurirId: kurirId,
      };
    }

    let headers = { "Content-Type": "application/json" };
    if (jwt_token !== "") {
      headers.Authorization = "Bearer " + jwt_token;
    }
    if (formIsValid) {
      fetch(url, {
        method: httpAction,
        headers: headers,
        body: JSON.stringify(sendData),
      })
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            console.log("Record submitted successfully");
            paketFuncs.toggleCreateEditAction("create");
            paketFuncs.clearTempData();
          } else {
            console.log("Error occured with code " + response.status);
            alert("Desila se greska!");
          }
        })
        .catch((error) => console.log(error));
      return false;
    }
    // }, [jwt_token]);

    // onConfirm({
    //   posiljalac: enteredPosiljalac,
    //   primalac: enteredPrimalac,
    //   tezina: enteredTezina,
    //   postarina: enteredPostarina,
    // });
  };

  const posiljalacControlClasses = `${classes.control} ${
    formInputsValidity.posiljalac ? "" : classes.invalid
  }`;
  const primalacControlClasses = `${classes.control} ${
    formInputsValidity.primalac ? "" : classes.invalid
  }`;
  const tezinaControlClasses = `${classes.control} ${
    formInputsValidity.tezina ? "" : classes.invalid
  }`;
  const postarinaControlClasses = `${classes.control} ${
    formInputsValidity.postarina ? "" : classes.invalid
  }`;

  return (
    <div className={classes["novi-paket-container"]}>
      <form onSubmit={submitHandler}>
        <div className={posiljalacControlClasses}>
          <label htmlFor="posiljalac">Posiljalac</label>
          <input type="text" id="posiljalac" ref={posiljalacInputRef} />
          {!formInputsValidity.posiljalac && (
            <p>Unesite validno ime posiljaoca!</p>
          )}
        </div>
        <div className={primalacControlClasses}>
          <label htmlFor="primalac">Primalac</label>
          <input type="text" id="primalac" ref={primalacInputRef} />
          {!formInputsValidity.primalac && (
            <p>Unesite validan naziv primaoca!</p>
          )}
        </div>
        <div className={tezinaControlClasses}>
          <label htmlFor="tezina">Tezina</label>
          <input type="number" id="tezina" ref={tezinaInputRef} />
          {!formInputsValidity.tezina && <p>Unesite validnu tezinu!</p>}
        </div>
        <div className={postarinaControlClasses}>
          <label htmlFor="postarina">Postarina</label>
          <input type="number" id="postarina" ref={postarinaInputRef} />
          {!formInputsValidity.postarina && <p>Unesite validnu postarinu!</p>}
        </div>
        <KuririDropdown />
        <div className={classes.actions}>
          <button type="button" onClick={paketFuncs.clearTempData}>
            Cancel
          </button>
          <button className={classes.submit}>Confirm</button>
        </div>
      </form>
    </div>
  );
  // return (
  //   <div>
  //     <h2>Dodavanje i Izmena Paketa</h2>
  //     <form onSubmit={submitPaket}>
  //       <div>
  //         <label htmlFor="posiljalac"></label>
  //         <input type="text" id="posiljalac" />
  //         <span className={classes.validationError}>{validationMessage}</span>
  //       </div>
  //       <div>
  //         <label htmlFor="primalac"></label>
  //         <input type="text" id="primalac" />
  //         <span className={classes.validationError}>{validationMessage}</span>
  //       </div>
  //       <div>
  //         <label htmlFor="tezina"></label>
  //         <input type="number" id="tezina" />
  //         <span className={classes.validationError}>{validationMessage}</span>
  //       </div>
  //       <div>
  //         <label htmlFor="postarina"></label>
  //         <input type="number" id="postarina" />
  //         <span className={classes.validationError}>{validationMessage}</span>
  //       </div>
  //       <div>
  //         <label htmlFor="kurir"></label>
  //         <input type="text" id="kurir" />
  //         <span className={classes.validationError}>{validationMessage}</span>
  //       </div>
  //       <div className={classes.actions}>
  //         <button type="button" onClick={props.onCancel}>
  //           Clear Form
  //         </button>
  //         <button className={classes.submit}>Submit</button>
  //       </div>
  //     </form>
  //   </div>
  // );
};

export default PaketForm;
// const RegisterForm = (props) => {
//   return (
//     <div className={classes["register-container"]}>
//       <form onSubmit={confirmHandler}>
//         <div className={nameControlClasses}>
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" ref={nameInputRef} />
//           {!formInputsValidity.username && (
//             <p>Please enter a valid username!</p>
//           )}
//         </div>
//         <div className={emailControlClasses}>
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" ref={emailInputRef} />
//           {!formInputsValidity.email && <p>Please enter a valid email!</p>}
//         </div>
//         <div className={passwordControlClasses}>
//           <label htmlFor="password">Tezina</label>
//           <input type="password" id="password" ref={passwordInputRef} />
//           {!formInputsValidity.password && (
//             <p>Please enter a valid password!</p>
//           )}
//         </div>
//         <div className={postarinaControlClasses}>
//           <label htmlFor="postarina">Repeat password</label>
//           <input
//             type="password"
//             id="postarina"
//             ref={postarinaInputRef}
//           />
//           {!formInputsValidity.postarina && <p>Tezinas must match!</p>}
//         </div>
//         <div className={classes.actions}>
//           <button type="button" onClick={props.onCancel}>
//             Cancel
//           </button>
//           <button className={classes.submit}>Confirm</button>
//         </div>
//       </form>
//     </div>
//   );
// };
