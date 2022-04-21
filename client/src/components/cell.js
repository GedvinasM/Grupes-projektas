import React from "react";
import { Closed, ClosedFlag, Opened, Mine } from "../img";
import "../App.css";

function Cell({ details, updateFlag, openCell }) {
  const cellStyle = {
    backgroundImage: details.flag
      ? `url(${ClosedFlag})`
      : details.opened
      ? `url(${Opened})`
      : `url(${Closed})`,
  };
  return (
    <div
      style={cellStyle}
      onClick={() => openCell(details.x, details.y)}
      onContextMenu={(e) => updateFlag(e, details.x, details.y)}
      className="cellStyle"
    >
      {details.opened ? (details.value === "0" ? details.value : "") : ""}
    </div>
  );
}

export default Cell;
