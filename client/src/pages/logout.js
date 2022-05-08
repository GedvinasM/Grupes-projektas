import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Redirect } from "react-router";

function Logout() {
  useEffect(() => {
    if (localStorage.getItem("loggedIn")) {
      localStorage.setItem("loggedIn", false);
    }
  }, []);

  return (
    <div>
      <h1>Logout</h1>
      {window.location.replace("/")}
    </div>
  );
}

export default Logout;
