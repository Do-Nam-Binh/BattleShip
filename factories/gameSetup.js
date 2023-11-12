const gameBoard = require("./gameBoard");
const player = require("./player");

const ship = require("./ship");

const gameSetup = () => {
  let playerTurn = true;

  const gameBoard1 = gameBoard();
  const gameBoard2 = gameBoard();

  const playerCharacter = player("Player", gameBoard1, false);
  const computer = player("Computer", gameBoard2, true);

  return {
    playerGet: () => playerCharacter,
    computerGet: () => computer,
    playerTurn: () => playerTurn,
    playerBoard: () => playerCharacter.boardArr(),
    computerBoard: () => computer.boardArr(),
    playerBoardObj: () => playerCharacter.board(),
    computerBoardObj: () => computer.board(),
  };
};

module.exports = gameSetup;
