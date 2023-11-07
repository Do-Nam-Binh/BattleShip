function createCell(index, hasShip = null) {
  const cell = document.createElement("div");
  cell.classList.add(`cell`);
  cell.classList.add(`${index}`);
  if (hasShip == true) {
    cell.classList.add("hasShip");
  }
  cell.textContent = `${index}`;
  return cell;
}

function createBoard(boardArr) {
  const board = document.createElement("div");
  board.classList.add("board");
  for (let i = 0; i < 100; i++) {
    if (boardArr[i].hasShip) {
      board.appendChild(createCell(i, true));
    } else {
      board.appendChild(createCell(i));
    }
  }
  return board;
}

module.exports = createBoard;
