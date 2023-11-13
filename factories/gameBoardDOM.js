const ship = require("../factories/ship.js");

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

function placeShipsComputerBoard(computerBoard) {
  let currShip = 0;
  const shipList = [
    { shipName: "Carrier", size: 5 },
    { shipName: "Battleship", size: 4 },
    { shipName: "Destroyer", size: 3 },
    { shipName: "Submarine", size: 3 },
    { shipName: "Patrol Boat", size: 2 },
  ];

  while (currShip < 5) {
    let position = Math.floor(Math.random() * 100) - 1;

    let axis = Math.random() < 0.5 ? 0 : 1;
    axis = axis == 0 ? "x" : "y";

    try {
      const result = placeShipDOM(
        ship(shipList[currShip].shipName, shipList[currShip].size),
        position,
        axis,
        computerBoard,
        "computerCell"
      );
      if (result == true) {
        currShip++;
      }
    } catch {
      continue;
    }
  }
}

module.exports = {
  createBoard,
  updateBoard,
  placeShipDOM,
  placeShipsComputerBoard,
};
