import React, { useEffect, useState } from "react";
import "../App.css";

function Check() {
  var loggedIn = localStorage.getItem("loggedIn");
  if (loggedIn === undefined || loggedIn === null) {
    localStorage.setItem("loggedIn", false);
  }

  return (
    <div>
      <h1>Loading</h1>
      {loggedIn === "false" ? (
        <>{window.location.replace("/login")}</>
      ) : (
        <>{window.location.replace("/home")}</>
      )}
    </div>
  );
}

export default Check;
