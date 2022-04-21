import React, { useEffect, useState } from "react";
import Axios from "axios";

import { useHistory } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  let history = useHistory();
  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("/api/user/login", {
      username: name,
      password: password,
    }).then((response) => {
      if (response.data.loggedIn) {
        localStorage.setItem("loggedIn", true);
        history.push("/");
      } else {
        setErrorMessage(response.data.message);
      }
    });
  };
  return (
    <div className="App">
      <div className="login">
        <h1>Prisijungimas</h1>
        <h2 style={{ color: "red" }}>{errorMessage}</h2>
        <label>Vardas: </label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br></br>
        <label>Slaptažodis: </label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br></br>
        <button onClick={login}> Prisijungti </button>
      </div>
    </div>
  );
}

export default Login;
