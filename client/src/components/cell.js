import React from "react";
import closed from "../img/closed.png";
import "../App.css";

function Cell({ details }) {
  const cellStyle = {
    backgroundImage: `url(${closed})`,
  };
  return <div style={cellStyle} className="cellStyle"></div>;
}

export default Cell;
