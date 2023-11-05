const player = require("./player.js");
const gameBoard = require("./gameBoard.js");

test("Player attack", () => {
  const gameBoard1 = gameBoard();
  const gameBoard2 = gameBoard();

  const playerTest = player("test", gameBoard1, false);
  const computerTest = player("testCP", gameBoard1, true);

  playerTest.attack(computerTest, 0);
  playerTest.attack(computerTest, 16);
  playerTest.attack(computerTest, 99);

  expect(computerTest.boardArr()[0].isShot).toBe(true);
  expect(computerTest.boardArr()[16].isShot).toBe(true);
  expect(computerTest.boardArr()[99].isShot).toBe(true);
});

test("Computer attack", () => {
  const gameBoard1 = gameBoard();
  const gameBoard2 = gameBoard();

  const playerTest = player("test", gameBoard1, false);
  const computerTest = player("testCP", gameBoard1, true);

  computerTest.attack(playerTest);
  computerTest.attack(playerTest);

  expect(playerTest.boardArr()[computerTest.attacked()[0]].isShot).toBe(true);
  expect(playerTest.boardArr()[computerTest.attacked()[1]].isShot).toBe(true);
});

test("Computer happens to shoot at same location", () => {
  const gameBoard1 = gameBoard();
  const gameBoard2 = gameBoard();

  const playerTest = player("test", gameBoard1, false);
  const computerTest = player("testCP", gameBoard1, true);

  computerTest.attack(playerTest, 22);
  computerTest.attack(playerTest, 22);

  expect(playerTest.boardArr()[22].isShot).toBe(true);
  expect(computerTest.attacked()[1]).not.toBe(22);
});
