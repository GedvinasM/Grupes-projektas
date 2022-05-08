import React from "react";
import { Closed, ClosedFlag, Opened, Mine } from "../img";
import "../App.css";

function Cell({ details, updateFlag, openCell }) {
  const cellStyle = {
    backgroundImage: details.flag
      ? `url(${ClosedFlag})`
      : details.opened
      ? details.value === "X"
        ? `url(${Mine})`
        : `url(${Opened})`
      : `url(${Closed})`,
    color: numColorCode(details.value),
  };
  return (
    <div
      style={cellStyle}
      onClick={() => openCell(details.x, details.y)}
      onContextMenu={(e) => updateFlag(e, details.x, details.y)}
      className="cellStyle"
    >
      <b>
        {details.opened
          ? details.value === 0 || details.value === "X"
            ? ""
            : details.value
          : ""}
      </b>
    </div>
  );
}

const numColorCode = (num) => {
  if (num === 1) {
    return "#1976d2";
  } else if (num === 2) {
    return "#388d3c";
  } else if (num === 3) {
    return "#d33030";
  } else if (num === 4) {
    return "#7c21a2";
  } else if (num === 5) {
    return "#1976d2";
  } else if (num === 6) {
    return "#1976d2";
  } else {
    return "white";
  }
};

export default Cell;
