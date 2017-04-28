const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.stacks = [[3, 2, 1], [], []];
  }
}

Game.prototype.promptMove = function(read, callback) {
  this.print();
  reader.question("Take disc from where?", function (start) {
    const startTowerIdx = parseInt(start);
    reader.question("Put disc where?", function (end) {
      const endTowerIdx = parseInt(end);
      callback(startTowerIdx, endTowerIdx);
    });
  });
};

Game.prototype.isValidMove = function(startTowerIdx, endTowerIdx) {
  const startTower = this.stacks[startTowerIdx];
  const endTower = this.stacks[endTowerIdx];

  if (this.stacks[endTowerIdx].length === 0) {
    return true;
  } else if (this.stacks[startTowerIdx].slice(-1)[0] < this.stacks[endTowerIdx].slice(-1)[0]) {
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

Game.prototype.isWon = function() {
  if (this.stacks[1].includes(1, 2, 3) || this.stacks[2].includes(1, 2, 3)) {
    return true;
  } else {
    return false;
  }
};

Game.prototype.run = function(read, completionCallBack) {
  this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
    if (!this.move(startTowerIdx, endTowerIdx)) {
      console.log("Invalid move!");
    }

    if (!this.isWon()) {
      this.run(reader, completionCallBack);
    } else {
      this.print();
      console.log("You win!");
      completionCallBack();
    }
  });
};

module.exports = Game;

// let game = new Game();
// game.promptMove(function(input1, input2) {
//   console.log(`${input1}, ${input2}`);
// });

// let game = new Game();
// game.run(reader, completionCallBack);
// console.log(game.isWon());
// game.print();
// console.log(game.move(0, 1));
// console.log(game.stacks);
// console.log(game.isValidMove(0, 2));
