export default (row, column, bombsCount) => {
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

  return { board, mines };
};
