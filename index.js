var Word = require("./word.js");
var colors = require("colors");
var clear = require("clear");
var inquirer = require("inquirer");

var wins = 0;
var losses = 0;

function Game() {
  this.guessesLeft = 7;
  this.guesses = [];
  this.word = new Word();
  this.wordDisplayed = this.word.getWord();
  this.wordHidden = this.word.getWordHidden(this.wordDisplayed);
  this.correct = false;
  this.guess = "";
  this.promptComlete = true;
  //function that starts the game
  this.start = function() {
    console.log(" ");
    console.log(
      "| Wins: " +
        colors.green(wins) +
        " | Losses: " +
        colors.red(losses) +
        " | Remaing Guesses: " +
        colors.magenta(this.guessesLeft) +
        " | Guesses: " +
        colors.yellow(this.guesses)
    );
    console.log(" ");
    console.log("Guess A Letter");
    console.log(this.wordHidden.join(" "));
    console.log(" ");
    inquirer.prompt([{ message: " ", name: "guess" }]).then(data => {
      this.guessWord(data.guess);
    });
  };
  //function that guesses the letter in the hidden word
  this.guessWord = function(guess) {
    var letter = guess;
    var correct = this.word.compareGuess(letter, this.wordDisplayed);
    if (correct === true) {
      for (let i = 0; i < this.wordHidden.length; i++) {
        if (letter === this.wordDisplayed[i]) {
          this.wordHidden[i] = letter;
        }
      }
      if (this.wordHidden.join("") === this.wordDisplayed) {
        this.promptComlete = false;
        wins += 1;
        inquirer
          .prompt([
            {
              type: "confirm",
              message: "YOU WIN! PLAY AGAIN?",
              name: "answer",
            },
          ])
          .then(data => {
            if (data.answer === true) {
              clear();
              var newGame = new Game();
              newGame.start();
            }
            if (data.answer === false) {
              process.exit();
            }
          });
      }
    } else {
      this.guessesLeft -= 1;
      if (this.guessesLeft === 0) {
        this.promptComlete = false;
        losses += 1;
        inquirer
          .prompt([
            {
              type: "confirm",
              message: "YOU LOSE! PLAY AGAIN?",
              name: "answer",
            },
          ])
          .then(data => {
            if (data.answer === true) {
              clear();
              var newGame = new Game();
              newGame.start();
            }
            if (data.answer === false) {
              process.exit();
            }
          });
      }
    }
    this.guesses.push(letter);
    if (this.promptComlete === true) {
      clear();
      this.start();
    }
  };
}

var game = new Game();
game.start();
