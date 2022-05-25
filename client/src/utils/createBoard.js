export default (row, column, bombs) => {
  let board = [];
  let mines = [];

  for (let x = 0; x < row; x++) {
    let columns = [];
    for (let y = 0; y < column; y++) {
      columns.push({
        value: 0,
        opened: false,
        x: x,
        y: y,
        flag: false,
      });
    }
    board.push(columns);
  }

  let bombsCount = 0;
  while (bombsCount < bombs) {
    let x = randomNum(0, row - 1);
    let y = randomNum(0, column - 1);

    if (board[x][y].value === 0) {
      board[x][y].value = "X";
      mines.push([x, y]);
      bombsCount++;
    }
  }

  // Add Numbers
  for (let roww = 0; roww < row; roww++) {
    for (let coll = 0; coll < column; coll++) {
      if (board[roww][coll].value === "X") {
        continue;
      }

      // Top
      if (roww > 0 && board[roww - 1][coll].value === "X") {
        board[roww][coll].value++;
      }

      // Top Right
      if (
        roww > 0 &&
        coll < column - 1 &&
        board[roww - 1][coll + 1].value === "X"
      ) {
        board[roww][coll].value++;
      }

      // Right
      if (coll < column - 1 && board[roww][coll + 1].value === "X") {
        board[roww][coll].value++;
      }

      // Botoom Right
      if (
        roww < row - 1 &&
        coll < column - 1 &&
        board[roww + 1][coll + 1].value === "X"
      ) {
        board[roww][coll].value++;
      }

      // Bottom
      if (roww < row - 1 && board[roww + 1][coll].value === "X") {
        board[roww][coll].value++;
      }

      // Bottom Left
      if (
        roww < row - 1 &&
        coll > 0 &&
        board[roww + 1][coll - 1].value === "X"
      ) {
        board[roww][coll].value++;
      }

      // LEft
      if (coll > 0 && board[roww][coll - 1].value === "X") {
        board[roww][coll].value++;
      }

      // Top Left
      if (roww > 0 && coll > 0 && board[roww - 1][coll - 1].value === "X") {
        board[roww][coll].value++;
      }
    }
  }

  return { board, mines };
};

function randomNum(min = 0, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
