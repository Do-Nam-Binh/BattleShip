const createBoard = require("../factories/gameBoardDOM");
const gameSetup = require("../factories/gameSetup");

const body = document.querySelector(".player");
const game = gameSetup();

body.appendChild(createBoard(game.playerBoard()));
