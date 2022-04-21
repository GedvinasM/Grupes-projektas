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

  const updateFlag = (e, x, y) => {
    e.preventDefault();
    if (grid[x][y].opened) {
      return;
    }
    let newGrid = JSON.parse(JSON.stringify(grid));
    if (grid[x][y].flag) {
      newGrid[x][y].flag = false;
    } else {
      newGrid[x][y].flag = true;
    }
    setGrid(newGrid);
  };

  const openCell = (x, y) => {
    if (grid[x][y].opened || grid[x][y].flag) {
      return;
    }
    let newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[x][y].opened = true;
    setGrid(newGrid);
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {grid.map((singleRow, index1) => {
        return (
          <div style={{ display: "flex" }} key={index1}>
            {singleRow.map((singleCell, index2) => {
              return (
                <Cell
                  details={singleCell}
                  openCell={openCell}
                  updateFlag={updateFlag}
                  key={index2}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default Board;
