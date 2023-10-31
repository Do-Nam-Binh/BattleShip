const ship = require("./ship.js");

test("Create ship with length 4", () => {
  const ship1 = ship("test1", 4);

  expect(ship1.name()).toBe("test1");
  expect(ship1.length()).toBe(4);
  expect(ship1.isHit()).toBe(0);
  expect(ship1.sunk()).toBe(false);
});

test("Create ship and increment hit", () => {
  const ship1 = ship("test2", 3);
  ship1.hit();

  expect(ship1.isHit()).toBe(1);
  expect(ship1.sunk()).toBe(false);
});

test("Create ship with length 3 and sink it", () => {
  const ship1 = ship("test3", 3);
  ship1.hit();
  ship1.hit();
  ship1.hit();

  expect(ship1.isHit()).toBe(3);
  expect(ship1.sunk()).toBe(true);
});
