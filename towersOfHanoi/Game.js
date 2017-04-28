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

Game.prototype.isValidMove = function(startTowerIdx, endTowerIdx) {
  if (this.stacks[startTowerIdx].slice(-1)[0] < this.stacks[endTowerIdx].slice(-1)[0]) {
    return true;
  } else {
    return false;
  }
};

Game.prototype.move = function(startTowerIdx, endTowerIdx) {
  if (this.isValidMove(startTowerIdx, endTowerIdx)) {
    let movingDisc = this.stacks[startTowerIdx].pop();
    this.stacks[endTowerIdx].push(movingDisc);
  } else {
    return false;
  }
  return true;
};

Game.prototype.print = function() {
  console.log(JSON.stringify(this.stacks));
};



// let game = new Game();
// game.promptMove(function(input1, input2) {
//   console.log(`${input1}, ${input2}`);
// });

// let game = new Game();
// game.stacks[0].push(2);
// game.stacks[1].push(1);
// game.stacks[2].push(3);
// game.print();
// console.log(game.move(0, 1));
// console.log(game.stacks);
// console.log(game.isValidMove(0, 2));
