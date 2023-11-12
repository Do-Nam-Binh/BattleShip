const gameSetup = require("../gameSetup");

test("Check game is set up correctly", () => {
  const game = gameSetup();

  expect(game.playerGet().name()).toBe("Player");
  expect(game.computerGet().name()).toBe("Computer");
});
