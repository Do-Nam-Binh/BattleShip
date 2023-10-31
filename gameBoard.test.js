const gameBoard = require("./gameBoard.js");
const ship = require("./ship.js");

test("Create gameboard", () => {
  const testArr = [];
  for (let i = 0; i < 100; i++) {
    testArr.push({ hasShip: false, isShot: false, ship: null });
  }
  const gameBoardTest = gameBoard();
  expect(gameBoardTest.boardArr()).toEqual(testArr);
});

test("Place ship at position 3 of length 4 horizontally", () => {
  const shipTest = ship("test1", 4);
  const gameBoardTest = gameBoard();

  gameBoardTest.placeShip(3, shipTest, "x");

  expect(gameBoardTest.boardArr()[3].hasShip).toBe(true);
  expect(gameBoardTest.boardArr()[4].hasShip).toBe(true);
  expect(gameBoardTest.boardArr()[5].hasShip).toBe(true);
  expect(gameBoardTest.boardArr()[6].hasShip).toBe(true);
});

test("Place ship at position 3 of length 4 vertically", () => {
  const shipTest = ship("test1", 4);
  const gameBoardTest = gameBoard();

  gameBoardTest.placeShip(3, shipTest, "y");

  expect(gameBoardTest.boardArr()[3].hasShip).toBe(true);
  expect(gameBoardTest.boardArr()[13].hasShip).toBe(true);
  expect(gameBoardTest.boardArr()[23].hasShip).toBe(true);
  expect(gameBoardTest.boardArr()[33].hasShip).toBe(true);
});

test("Place ship at occupied position", () => {
  const shipTest = ship("test1", 4);
  const shipTest2 = ship("test2", 3);
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

test("Check ship is placed", () => {
  const shipTest = ship("test1", 3);
  const gameBoardTest = gameBoard();

  gameBoardTest.placeShip(3, shipTest, "x");

  expect(gameBoardTest.boardArr()[3].ship).toEqual(shipTest);
  expect(gameBoardTest.boardArr()[4].ship).toEqual(shipTest);
  expect(gameBoardTest.boardArr()[5].ship).toEqual(shipTest);
  expect(gameBoardTest.boardArr()[6].ship).toBe(null);
});

test("Attack missed", () => {
  const gameBoardTest = gameBoard();

  expect(gameBoardTest.receiveAttack(3)).toBe("Shot missed!");
  expect(gameBoardTest.boardArr()[3].isShot).toBe(true);
});

test("Attack hit ship", () => {
  const shipTest = ship("test", 3);
  const gameBoardTest = gameBoard();

  gameBoardTest.placeShip(2, shipTest, "x");

  expect(gameBoardTest.receiveAttack(3)).toBe("Hit!");
  expect(gameBoardTest.boardArr()[3].isShot).toBe(true);
});

test("Attack sunk ship", () => {
  const shipTest = ship("test", 3);
  const shipTest2 = ship("test2", 2);
  const gameBoardTest = gameBoard();

  gameBoardTest.placeShip(2, shipTest, "x");
  gameBoardTest.placeShip(13, shipTest2, "y");

  expect(gameBoardTest.receiveAttack(2)).toBe("Hit!");
  expect(gameBoardTest.receiveAttack(3)).toBe("Hit!");
  expect(gameBoardTest.receiveAttack(4)).toBe("Ship sunk!");
  expect(gameBoardTest.boardArr()[2].ship.sunk()).toBe(true);
});

test("Attack sunk last ship", () => {
  const shipTest = ship("test", 3);
  const shipTest2 = ship("test2", 2);
  const gameBoardTest = gameBoard();

  gameBoardTest.placeShip(2, shipTest, "x");
  gameBoardTest.placeShip(13, shipTest2, "y");

  gameBoardTest.receiveAttack(2);
  gameBoardTest.receiveAttack(3);
  gameBoardTest.receiveAttack(4);

  expect(gameBoardTest.boardArr()[23].hasShip).toBe(true);
  expect(gameBoardTest.boardArr()[23].ship).toEqual(shipTest2);

  expect(gameBoardTest.receiveAttack(13)).toBe("Hit!");
  expect(gameBoardTest.receiveAttack(23)).toBe("All ships have been sunk!");
});

test("Attack location that has been shot", () => {
  const gameBoardTest = gameBoard();

  expect(gameBoardTest.receiveAttack(2)).toBe("Shot missed!");
  expect(gameBoardTest.receiveAttack(2)).toBe("Already fired at location!");
});
