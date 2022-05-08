import React, { useEffect, useState } from "react";
import "../App.css";
import Board from "../components/board";

function Home() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h1>Minų šlavėjas</h1>
      {visible ? (
        <>
          <div>
            <Board />
          </div>
        </>
      ) : (
        <>
          <button onClick={() => setVisible(true)}> Play </button>
        </>
      )}
    </div>
  );
}

export default Home;
