var Letter = require("./letter.js");

function Word() {
  this.wordArray = [
    "alabama",
    "alaska",
    "arizona",
    "arkansas",
    "california",
    "colorado",
    "connecticut",
    "delaware",
    "florida",
    "georgia",
    "hawaii",
    "idaho",
    "illinois",
    "indiana",
    "iowa",
    "kansas",
    "kentucky",
    "louisiana",
    "maine",
    "maryland",
    "massachusetts",
    "michigan",
    "minnesota",
    "mississippi",
    "missouri",
    "montana",
    "nebraska",
    "nevada",
    "new hampshire",
    "new jersey",
    "new mexico",
    "new york",
    "north carolina",
    "north dakota",
    "ohio",
    "oklahoma",
    "oregon",
    "pennsylvania",
    "rhode island",
    "south carolina",
    "south dakota",
    "tennessee",
    "texas",
    "utah",
    "vermont",
    "virginia",
    "washington",
    "west virginia",
    "wisconsin",
    "wyoming",
  ];
  this.wordHidden = [];
  this.word = "";
  this.getWord = function() {
    this.word = this.wordArray[Math.floor(Math.random() * 50 + 1)];
    return this.word;
  };
  this.getWordHidden = function(word) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] === " ") {
        this.wordHidden[i] = " ";
      } else {
        this.wordHidden[i] = "_";
      }
    }
    return this.wordHidden;
  };
  this.compareGuess = function(guess, word) {
    this.guess = guess;
    this.word = word;
    var letter = new Letter(this.guess, this.word);
    return letter.compareGuess();
  };
}

module.exports = Word;
