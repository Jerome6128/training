const team = {
    _players: [
      {firstName: 'Zinedine',
      lastName: 'Zidane',
      age: 32},
      {firstName: 'Franck',
      lastName: 'Leboeuf',
      age: 23},
      {firstName: 'Laurent',
      lastName: 'Blanc',
      age: 29}
    ],
    _games: [
      {opponent: 'Brazil',
      teamPoints: 3,
      opponentPoints: 0
      },
      {opponent: 'Germany',
      teamPoints: 2,
      opponentPoints: 1
      },
      {opponent: 'Italy',
      teamPoints: 3,
      opponentPoints: 4
      }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
      const player = {
        firstName,
        lastName,
        age
      };
      this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
      const game = {
        opponent,
        teamPoints,
        opponentPoints
      };
      this._games.push(game);
    }
  };
  team.addPlayer('Steph', 'Curry',28);
  team.addPlayer('Lisa', 'Leslie',44);
  team.addPlayer('Bugs', 'Bunny',76);
  console.log(team.players);
  team.addGame('Paraguay', 3, 2);
  team.addGame('Uruguay', 2, 0);
  team.addGame('Argentina', 0, 2);
  console.log(team.games);
  
  
  