const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("What number would you like to add?", function (answer) {
      let parsedAnswer = parseInt(answer);
      sum += parsedAnswer;
      console.log(sum);
      numsLeft -= 1;
      addNumbers(sum, numsLeft, completionCallback);
    });
  } else {
    reader.close();
    completionCallback(sum);
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
