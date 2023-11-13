const {
  createBoard,
  updateBoard,
  placeShipDOM,
} = require("../factories/gameBoardDOM");
const gameSetup = require("../factories/gameSetup");
const ship = require("../factories/ship.js");

const placeShipOverlay = document.querySelector(".preGame");

const playerBoardDom = document.querySelector(".player");
const computerBoardDom = document.querySelector(".computer");
const game = gameSetup();

const playerGameBoard = createBoard(game.playerBoard(), true);

playerBoardDom.appendChild(playerGameBoard);
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

let currShip = 0;
const shipList = [
  { shipName: "Carrier", size: 5 },
  { shipName: "Battleship", size: 4 },
  { shipName: "Destroyer", size: 3 },
  { shipName: "Submarine", size: 3 },
  { shipName: "Patrol Boat", size: 2 },
];

const shipNameDOM = document.querySelector(".shipName");
shipNameDOM.textContent = shipList[currShip].shipName;

const title = document.querySelector(".title");
const boardNames = document.querySelectorAll(".boardName");

placeShipBtn.addEventListener("click", () => {
  const shipHolder = ship(shipList[currShip].shipName, shipList[currShip].size);
  const result = placeShipDOM(
    shipHolder,
    Number.parseInt(locationInput.value),
    axisBtn.textContent.toLowerCase(),
    game.playerBoardObj(),
    "playerCell"
  );
  if (result == true) {
    currShip++;
    if (currShip < 5) {
      shipNameDOM.textContent = shipList[currShip].shipName;
    }
  }

  if (currShip == 5) {
    form.classList.add("deactive");
    title.classList.add("deactive");
    boardNames.forEach((board) => {
      board.classList.remove("deactive");
    });
  }
});
