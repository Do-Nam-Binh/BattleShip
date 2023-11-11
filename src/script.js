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

const shipInput = document.querySelector(".shipInput");
const locationInput = document.querySelector(".locationInput");
const axisBtn = document.querySelector(".axis");
const placeShipBtn = document.querySelector(".placeShip");
const form = document.querySelector("#placeShipForm");

axisBtn.addEventListener("click", () => {
  if (axisBtn.textContent == "X") {
    axisBtn.textContent = "Y";
  } else {
    axisBtn.textContent = "X";
  }
});

placeShipBtn.addEventListener("click", () => {
  const shipHolder = ship("", shipInput.value);
  placeShipDOM(
    shipHolder,
    Number.parseInt(locationInput.value),
    axisBtn.textContent.toLowerCase(),
    game.playerBoardObj(),
    "playerCell"
  );
});
// const shipTest = ship("test", 3);
// placeShipDOM(shipTest, 72, "y", game.playerBoardObj(), "playerCell");
