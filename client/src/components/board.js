import React, { useEffect, useState } from "react";
import createBoard from "../utils/createBoard";
import Cell from "./cell";
const Board = () => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    function getBoard() {
      const newBoard = createBoard(20, 20, 15);
      setGrid(newBoard.board);
    }
    getBoard();
  }, []);


  return grid.map((singleRow, index1) => {
    return (
      <div style={{ display: "flex" }} key={index1}>
        {singleRow.map((singleCell, index2) => {
          return (
            <Cell
              details={singleCell}
              key={index2}
            />
          );
        })}
      </div>
    );
  });
};
export default Board;
