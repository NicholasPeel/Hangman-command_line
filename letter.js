var colors = require("colors");

function Letter(guess, word) {
  this.guess = guess;
  this.word = word;
  this.compareGuess = function() {
    for (let i = 0; i < this.word.length; i++) {
      if (this.guess === this.word[i]) {
        return true;
      }
    }
    return false;
  };
}

module.exports = Letter;
