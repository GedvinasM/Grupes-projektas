import "./App.css";
import React, { useEffect, useState } from "react";
import {
  Home,
  Login,
  Forgot,
  Register,
  Navigation,
  CheckPage,
  Logout,
} from "./pages";
import Axios from "axios";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  // Axios.defaults.withCredentials = true;
  // useEffect(() => {
  //   Axios.get("http://localhost:3001/login").then((response) => {
  //     if (response.data.loggedIn === true) {
  //       <Redirect to="/" />;
  //     } else {
  //       <Redirect to="/login" />;
  //     }
  //   });
  // }, []);

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path="/" component={CheckPage} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={Forgot} />
        <Route path="/logout" component={Logout} />
      </div>
    </Router>
  );
}

export default App;
