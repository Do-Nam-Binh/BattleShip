const gameBoard = require("./gameBoard");
const player = require("./player");

const ship = require("./ship");

const gameSetup = () => {
  let playerTurn = true;

  const gameBoard1 = gameBoard();
  const gameBoard2 = gameBoard();

  const shipBig1 = ship("big1", 4);
  const shipBig2 = ship("big2", 4);
  const shipMedium1 = ship("med1", 3);
  const shipMedium2 = ship("med2", 3);
  const shipSmall1 = ship("small1", 2);
  const shipSmall2 = ship("small2", 2);

  gameBoard1.placeShip(25, shipBig1, "x");
  gameBoard1.placeShip(30, shipMedium1, "y");
  gameBoard1.placeShip(88, shipSmall1, "x");

  gameBoard2.placeShip(22, shipBig2, "x");
  gameBoard2.placeShip(10, shipMedium2, "y");
  gameBoard2.placeShip(44, shipSmall2, "x");

  const playerCharacter = player("Player", gameBoard1, false);
  const computer = player("Computer", gameBoard2, true);

  return {
    playerGet: () => playerCharacter,
    computerGet: () => computer,
    playerTurn: () => playerTurn,
    playerBoard: () => playerCharacter.boardArr(),
    computerBoard: () => computer.boardArr(),
  };
};

module.exports = gameSetup;
