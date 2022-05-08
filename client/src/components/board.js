import React, { useEffect, useState } from "react";
import createBoard from "../utils/createBoard";
import { revealed } from "../utils/reveal";
import Cell from "./cell";
const Board = () => {
  const [grid, setGrid] = useState([]);
  const [rip, setRip] = useState(false);
  const [nonMineCount, setNonMineCount] = useState(0);
  const [mineLocations, setMineLocations] = useState([]);

  useEffect(() => {
    function getBoard() {
      let size = 20;
      let bombs = 50;
      const newBoard = createBoard(size, size, bombs);
      setNonMineCount(size * size - bombs);
      setMineLocations(newBoard.mines);
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
    if (grid[x][y].value === "X") {
      for (let i = 0; i < mineLocations.length; i++) {
        newGrid[mineLocations[i][0]][mineLocations[i][1]].opened = true;
      }
      setGrid(newGrid);
      setRip(true);
    } else {
      let newOpenedGrid = revealed(newGrid, x, y);
      setGrid(newOpenedGrid.arr);
    }
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {rip === true ? <h1>Game over</h1> : ""}
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
