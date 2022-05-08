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
        <h1>Register</h1>
        <label>Username: </label>
        <input
          type="text"
          // placeholder="Username..."
          onChange={(e) => {
            setNameReg(e.target.value);
          }}
        />
        <br></br>
        <label>Password: </label>
        <input
          type="password"
          // placeholder="Password..."
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <br></br>
        <label>Confirm password: </label>
        <input
          type="password"
          // placeholder="Password..."
        />
        <br></br>
        <button onClick={register}> Sign up </button>
      </div>
    </div>
  );
}

export default Register;
