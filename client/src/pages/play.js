import React, { useEffect, useState } from "react";
import "../App.css";
import Board from "../components/board";

function Play() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h1>Play</h1>
      {visible ? (
        <>
          <div>
            <Board />
          </div>
        </>
      ) : (
        <>
          <button onClick={() => setVisible(true)}> Žaisti </button>
        </>
      )}
    </div>
  );
}

export default Play;
