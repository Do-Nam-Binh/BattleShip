const ship = (name, length) => {
  let sunk = false;
  let isHit = 0;

  const hit = () => {
    if (sunk == false) {
      isHit++;
      isSunk();
    } else {
      return "ship already sunk";
    }
  };

  const isSunk = () => {
    if (isHit == length) sunk = true;
  };

  return {
    name: () => name,
    length: () => length,
    isHit: () => isHit,
    sunk: () => sunk,
    hit: hit,
  };
};

module.exports = ship;
