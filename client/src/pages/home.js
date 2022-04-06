import React, { useEffect, useState } from "react";
import Axios from "axios";

function Home() {
  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      localStorage.setItem("loggedIn", false);
    }
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
