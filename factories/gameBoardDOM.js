function createCell(index, hasShip = null) {
  const cell = document.createElement("div");
  cell.classList.add(`cell`);
  cell.classList.add(`${index}`);
  if (hasShip) {
    cell.classList.add("hasShip");
  }
  return cell;
}

function createBoard(boardObj) {
  const board = document.createElement("div");
  board.classList.add("board");
  for (let i = 0; i < 100; i++) {
    if (boardObj[i].hasShip == true) {
      board.appendChild(createCell(i), true);
    } else {
      board.appendChild(createCell(i));
    }
  }
  return board;
}

module.exports = createBoard;
