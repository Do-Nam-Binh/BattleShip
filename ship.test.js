const ship = require("./ship.js");

test("Create ship with length 4", () => {
  const ship1 = ship(4);
  expect(ship1.length()).toBe(4);
  expect(ship1.isHit()).toBe(0);
  expect(ship1.sunk()).toBe(false);
});

test("Create ship with length 3 and increment hit", () => {
  const ship1 = ship(3);
  ship1.hit();
  expect(ship1.length()).toBe(3);
  expect(ship1.isHit()).toBe(1);
  expect(ship1.sunk()).toBe(false);
});

test("Create ship with length 3 and sink it", () => {
  const ship1 = ship(3);
  ship1.hit();
  ship1.hit();
  ship1.hit();
  expect(ship1.length()).toBe(3);
  expect(ship1.isHit()).toBe(3);
  expect(ship1.sunk()).toBe(true);
});
