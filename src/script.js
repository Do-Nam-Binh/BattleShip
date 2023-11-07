const createBoard = require("../factories/gameBoardDOM");
const gameSetup = require("../factories/gameSetup");

const playerBoardDom = document.querySelector(".player");
const computerBoardDom = document.querySelector(".computer");
const game = gameSetup();

playerBoardDom.appendChild(createBoard(game.playerBoard()));
computerBoardDom.appendChild(createBoard(game.computerBoard()));
