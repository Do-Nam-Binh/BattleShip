const gameBoard = require("./gameBoard.js");
const ship = require("./ship.js");

test("Create gameboard", () => {
  const testArr = [];
  for (let i = 0; i < 100; i++) {
    testArr.push({ hasShip: false, isShot: false });
  }
  const gameBoardTest = gameBoard();
  expect(gameBoardTest.boardArr()).toEqual(testArr);
});

test("Place ship at position 3 of length 4 horizontally", () => {
  const shipTest = ship(4);
  const gameBoardTest = gameBoard();

  gameBoardTest.placeShip(3, shipTest, "x");

  expect(gameBoardTest.boardArr()[3].hasShip).toBe(true);
  expect(gameBoardTest.boardArr()[4].hasShip).toBe(true);
  expect(gameBoardTest.boardArr()[5].hasShip).toBe(true);
  expect(gameBoardTest.boardArr()[6].hasShip).toBe(true);
});

test("Place ship at position 3 of length 4 vertically", () => {
  const shipTest = ship(4);
  const gameBoardTest = gameBoard();

  gameBoardTest.placeShip(3, shipTest, "y");

  expect(gameBoardTest.boardArr()[3].hasShip).toBe(true);
  expect(gameBoardTest.boardArr()[13].hasShip).toBe(true);
  expect(gameBoardTest.boardArr()[23].hasShip).toBe(true);
  expect(gameBoardTest.boardArr()[33].hasShip).toBe(true);
});

test("Place ship at occupied position", () => {
  const shipTest = ship(4);
  const shipTest2 = ship(3);
  const gameBoardTest = gameBoard();

  gameBoardTest.placeShip(13, shipTest, "x");
  expect(gameBoardTest.placeShip(3, shipTest2, "y")).toBe(
    "Cannot place ship on occupied position"
  );

  expect(gameBoardTest.boardArr()[3].hasShip).toBe(false);
  expect(gameBoardTest.boardArr()[13].hasShip).toBe(true);
  expect(gameBoardTest.boardArr()[14].hasShip).toBe(true);
  expect(gameBoardTest.boardArr()[15].hasShip).toBe(true);
  expect(gameBoardTest.boardArr()[16].hasShip).toBe(true);
});
