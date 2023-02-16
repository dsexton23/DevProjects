const team = {
    _players: [{firstName: 'Steph', lastName: 'Curry', age: 34},
                {firstName: 'Domas', lastName: 'Sabonis', age: 26},
                {firstName: 'Donovan', lastName: 'Mitchell', age: 26}],
    _games: [{opponent: 'Lakers', teamPoints: 123, opponentPoints: 115},
             {opponent: 'Clippers', teamPoints: 108, opponentPoints: 99},
             {opponent: 'Suns', teamPoints: 138, opponentPoints: 125},],

    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },

    addPlayer(newFirstName, newLastName, newAge){
        let newPlayer = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        };
        this.players.push(newPlayer);
    },

    addGame(newOpponent, newTeamPoints, newopponentPoints){
        let newGame = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newopponentPoints
        };
        this.games.push(newGame);
    }
}

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);

console.log(team._games);