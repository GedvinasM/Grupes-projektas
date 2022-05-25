import React, { useEffect, useState } from "react";
import randomInteger from "random-int";
import createBoard from "../utils/createBoard";
import { revealed } from "../utils/reveal";
import Cell from "./cell";
import { Dead, Cool, Smiley } from "../img";
import "../font.css";

var timeElapsed;
var elapsedTime;
var timerId;

function setTimer() {
  timerId = setInterval(function () {
    elapsedTime += 1;
    document.getElementById("timer").innerText = elapsedTime
      .toString()
      .padStart(3, "0");
  }, 1000);
}

const Board = () => {
  const [grid, setGrid] = useState([]);
  const [rip, setRip] = useState(false);
  const [win, setWin] = useState(false);
  const [nonMineCount, setNonMineCount] = useState(0);
  const [mineLocations, setMineLocations] = useState([]);
  const [widthSize, setWidthSize] = useState(0);
  const [flags, setFlags] = useState(0);

  useEffect(() => {
    newBoard();

    elapsedTime = 0;
    clearInterval(timerId);
    timerId = null;
  }, []);

  const newBoard = () => {
    let size = randomInteger(10, 30);
    let bombs = size * 2;
    if (size >= 15 && size <= 20) {
      bombs = size * 3;
    } else if (size > 20) {
      bombs = size * 4;
    }
    setFlags(bombs);
    setWidthSize(size * 30);
    const newBoard = createBoard(size, size, bombs);
    setNonMineCount(size * size - bombs);
    setMineLocations(newBoard.mines);
    setGrid(newBoard.board);
  };

  const restartGame = () => {
    newBoard();
    document.getElementById("timer").innerText = "000";
    elapsedTime = 0;
    clearInterval(timerId);
    timerId = null;
    setRip(false);
    setWin(false);
  };

  const updateFlag = (e, x, y) => {
    e.preventDefault();
    if (grid[x][y].opened || rip) {
      return;
    }
    if (!timerId) setTimer();
    let newGrid = JSON.parse(JSON.stringify(grid));
    if (grid[x][y].flag) {
      setFlags(flags + 1);
      newGrid[x][y].flag = false;
    } else {
      setFlags(flags - 1);
      newGrid[x][y].flag = true;
    }
    setGrid(newGrid);
  };

  const openCell = (x, y) => {
    if (grid[x][y].opened || grid[x][y].flag || rip) {
      return;
    }
    if (!timerId) setTimer();
    let newGrid = JSON.parse(JSON.stringify(grid));
    if (grid[x][y].value === "X") {
      for (let i = 0; i < mineLocations.length; i++) {
        newGrid[mineLocations[i][0]][mineLocations[i][1]].opened = true;
      }
      setGrid(newGrid);
      setRip(true);
      clearInterval(timerId);
    } else {
      let newOpenedGrid = revealed(newGrid, x, y, nonMineCount, flags);
      setFlags(newOpenedGrid.flags);
      setGrid(newOpenedGrid.arr);
      setNonMineCount(newOpenedGrid.newNonMinesCount);
      if (newOpenedGrid.newNonMinesCount === 0) {
        clearInterval(timerId);
        setRip(true);
        setWin(true);
      }
    }
  };
  let flagCount = flags >= 0 ? flags.toString().padStart(3, "0") : flags;
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        class="menu menuDiv"
        style={{ width: widthSize, height: "64px", display: "flex" }}
      >
        <selection id="status-bar">
          <div id="bomb-counter">{flagCount}</div>
          <div id="reset" onClick={() => restartGame()}>
            {rip === true ? (
              win === true ? (
                <img src={Cool} />
              ) : (
                <img src={Dead} />
              )
            ) : (
              <img src={Smiley} />
            )}
          </div>
          <div id="timer"> 000</div>
        </selection>
      </div>
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
