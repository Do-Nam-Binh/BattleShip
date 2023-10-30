const ship = require("./ship");

const gameBoard = () => {
  const boardArr = [];

  const initBoard = () => {
    for (let i = 0; i < 100; i++) {
      boardArr.push({ hasShip: false, isShot: false });
    }
  };

  const placeShip = (position, ship, axis) => {
    if (checkOccupied(position, ship, axis)) {
      for (let i = 0; i < ship.length(); i++) {
        if (axis == "x") {
          boardArr[position + i].hasShip = true;
        } else {
          boardArr[position + i * 10].hasShip = true;
        }
      }
    } else {
      return "Cannot place ship on occupied position";
    }
  };

  const checkOccupied = (position, ship, axis) => {
    const locationOcc = [];
    for (let i = 0; i < ship.length(); i++) {
      if (axis == "x") {
        if (boardArr[position + i].hasShip == true) {
          return false;
        }
      } else {
        if (boardArr[position + i * 10].hasShip == true) {
          return false;
        }
      }
    }
    return true;
  };

  if (!boardArr.length) initBoard();

  return {
    boardArr: () => boardArr,
    placeShip: placeShip,
  };
};

module.exports = gameBoard;
