const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.stacks = [[], [], []];
  }
}

Game.prototype.promptMove = function(cb) {
  reader.question("Take disc from where?", function (startTowerIdx) {
    reader.question("Put disc where?", function (endTowerIdx) {
      cb(startTowerIdx, endTowerIdx);
    });
  });
};

// let game = new Game();
// game.promptMove(function(input1, input2) {
//   console.log(`${input1}, ${input2}`);
// });
