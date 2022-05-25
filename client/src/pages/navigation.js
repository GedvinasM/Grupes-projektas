import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./components/navigation.css";

function Navigation() {
  var loggedIn = localStorage.getItem("loggedIn");

  useEffect(() => {
    Axios.get("/api/user/login").then((response) => {
      if (response.data.loggedIn == true) {
        loggedIn = true;
      } else {
        loggedIn = false;
      }
    });
  }, []);

  console.log(loggedIn);

  return (
    <nav className="MenuBarItems">
      <ul className="MenuBar">
        {loggedIn === "false" ? (
          <>
            <li>
              <Link className="navigation-links" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="navigation-links" to="/register">
                Register
              </Link>
            </li>
            <li>
              <Link className="navigation-links" to="/forgot-password">
                Forgot password
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className="navigation-links" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="navigation-links" to="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link className="navigation-links" to="/logout">
                Logout
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
export default Navigation;
