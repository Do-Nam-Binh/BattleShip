function createCell(index, isPlayer) {
  const cell = document.createElement("div");

  if (isPlayer == true) {
    cell.classList.add(`playerCell`);
  } else {
    cell.classList.add(`computerCell`);
  }

  cell.textContent = `${index}`;
  cell.setAttribute("position", `${index}`);

  return cell;
}

function createBoard(boardArr, isPlayer) {
  const board = document.createElement("div");
  board.classList.add("board");
  if (!isPlayer) {
    board.classList.add("deactive");
  }
  for (let i = 0; i < 100; i++) {
    if (boardArr[i].hasShip) {
      board.appendChild(createCell(i, isPlayer));
    } else {
      board.appendChild(createCell(i, isPlayer));
    }
  }
  return board;
}

function updateBoard(cellName, board) {
  const cells = document.getElementsByClassName(`${cellName}`);

  for (let i = 0; i < 100; i++) {
    if (board[i].hasShip == true) {
      cells[i].classList.add("hasShip");
    }
  }
}

function placeShipDOM(ship, position, axis, board, cellName) {
  const result = board.placeShip(position, ship, axis);
  updateBoard(cellName, board.boardArr());
  console.log(result);
  return result;
}

module.exports = { createBoard, updateBoard, placeShipDOM };
