const player = (name, board, isComputer) => {
  const attacked = [];

  const playerAttack = (player, location) =>
    player.board().receiveAttack(location);

  const attack = (player, location = Math.floor(Math.random() * 100)) => {
    if (isComputer == false) {
      playerAttack(player, location);
    } else {
      while (attacked.includes(location)) {
        location = Math.floor(Math.random() * 100);
      }
      attacked.push(location);
      console.log(location);
      playerAttack(player, location);
    }
  };

  return {
    name: () => name,
    board: () => board,
    boardArr: () => board.boardArr(),
    isComputer: () => isComputer,
    attacked: () => attacked,
    attack: attack,
  };
};

module.exports = player;
