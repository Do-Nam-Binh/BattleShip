const gameSetup = require("./gameSetup");

test("Check game is set up correctly", () => {
  const game = gameSetup();

  expect(game.playerGet().name()).toBe("Player");
  expect(game.computerGet().name()).toBe("Computer");

  //Check ships in player's board
  expect(game.playerBoard()[20].hasShip).toBe(true);
  expect(game.playerBoard()[23].hasShip).toBe(true);
  expect(game.playerBoard()[20].ship.name()).toBe("big1");

  expect(game.playerBoard()[30].hasShip).toBe(true);
  expect(game.playerBoard()[50].hasShip).toBe(true);
  expect(game.playerBoard()[30].ship.name()).toBe("med1");

  expect(game.playerBoard()[33].hasShip).toBe(true);
  expect(game.playerBoard()[34].hasShip).toBe(true);
  expect(game.playerBoard()[33].ship.name()).toBe("small1");

  //Check ships in computer's board
  expect(game.computerBoard()[22].hasShip).toBe(true);
  expect(game.computerBoard()[25].hasShip).toBe(true);
  expect(game.computerBoard()[22].ship.name()).toBe("big2");

  expect(game.computerBoard()[10].hasShip).toBe(true);
  expect(game.computerBoard()[30].hasShip).toBe(true);
  expect(game.computerBoard()[10].ship.name()).toBe("med2");

  expect(game.computerBoard()[44].hasShip).toBe(true);
  expect(game.computerBoard()[45].hasShip).toBe(true);
  expect(game.computerBoard()[44].ship.name()).toBe("small2");
});
