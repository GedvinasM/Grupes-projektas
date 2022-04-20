import React, { useEffect, useState } from "react";
import Axios from "axios";

function Register() {
  const [nameReg, setNameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    Axios.post("/api/user/register", {
      username: nameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="App">
      <div className="reg">
        <h1>Registracija</h1>
        <label>Vardas: </label>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setNameReg(e.target.value);
          }}
        />
        <br></br>
        <label>Slaptažodis: </label>
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <br></br>
        <button onClick={register}> Registruotis </button>
      </div>
    </div>
  );
}

export default Register;
