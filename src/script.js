const {
  createBoard,
  updateBoard,
  placeShipDOM,
} = require("../factories/gameBoardDOM");
const gameSetup = require("../factories/gameSetup");
const ship = require("../factories/ship.js");

const playerBoardDom = document.querySelector(".player");
const computerBoardDom = document.querySelector(".computer");
const game = gameSetup();

playerBoardDom.appendChild(createBoard(game.playerBoard(), true));
computerBoardDom.appendChild(createBoard(game.computerBoard(), false));
updateBoard("playerCell", game.playerBoard());
updateBoard("computerCell", game.computerBoard());

const shipTest = ship("test", 3);
placeShipDOM(shipTest, 72, "y", game.playerBoardObj(), "playerCell");
