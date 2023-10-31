const ship = require("./ship");

const gameBoard = () => {
  const boardArr = [];
  let shipNum = 0;

  const initBoard = () => {
    for (let i = 0; i < 100; i++) {
      boardArr.push({ hasShip: false, isShot: false, ship: null });
    }
  };

  const placeShip = (position, ship, axis) => {
    if (checkOccupied(position, ship, axis)) {
      for (let i = 0; i < ship.length(); i++) {
        if (axis == "x") {
          boardArr[position + i].hasShip = true;
          boardArr[position + i].ship = ship;
        } else {
          boardArr[position + i * 10].hasShip = true;
          boardArr[position + i * 10].ship = ship;
        }
      }
      shipNum++;
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

  const receiveAttack = (location) => {
    if (boardArr[location].isShot == false) {
      boardArr[location].isShot = true;

      if (boardArr[location].hasShip == false) {
        return "Shot missed!";
      } else {
        boardArr[location].ship.hit();

        if (boardArr[location].ship.sunk() == true) {
          shipNum--;
          if (shipNum == 0) {
            return "All ships have been sunk!";
          }
          return "Ship sunk!";
        } else {
          return "Hit!";
        }
      }
    } else {
      return "Already fired at location!";
    }
  };

  if (!boardArr.length) initBoard();

  return {
    boardArr: () => boardArr,
    placeShip: placeShip,
    receiveAttack: receiveAttack,
  };
};

module.exports = gameBoard;
