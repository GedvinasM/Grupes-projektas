import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Navigation() {
  var loggedIn = localStorage.getItem("loggedIn");

  useEffect(() => {
    Axios.get("http://localhost:3001/user/login").then((response) => {
      if (response.data.loggedIn == true) {
        loggedIn = true;
      } else {
        loggedIn = false;
      }
    });
  }, []);

  console.log(loggedIn);

  return (
    <div className="main">
      <Link to="/">Home</Link>
      <br />
      {loggedIn === "false" ? (
        <>
          <Link to="/login">Login</Link>
          <br />
          <Link to="/register">Register</Link>
          <br />
          <Link to="/forgot-password">Forgot password</Link>
        </>
      ) : (
        <>
          <Link to="/play">Play</Link>
          <br />
          <Link to="/logout">Logout</Link>
          <br />
        </>
      )}
    </div>
  );
}
export default Navigation;
