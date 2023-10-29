const ship = (length) => {
  let sunk = false;
  let isHit = 0;

  const hit = () => {
    isHit++;
    isSunk();
  };

  const isSunk = () => {
    if (isHit == length) sunk = true;
  };

  return {
    length: () => length,
    isHit: () => isHit,
    sunk: () => sunk,
    hit: hit,
  };
};

module.exports = ship;
