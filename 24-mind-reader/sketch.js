//Mind Reader Demo

let choiceHistory;
let lastFourGuesses;
let computerScore;
let userScore;
let userChoice;
let computerGuess;
let gameIsOver;
let scoreToWin;
let textSizeVariable;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSizeVariable = width / 30;
  resetGame();
  predictUserChoice();
  background(255);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(textSizeVariable);
  text("You need to outsmart my computer program.\nI will predict whether you will choose tails or heads.\n\nIf I'm right, I get 1 point.\nIf I'm wrong, you get 1 point.\n\nThe game goes to " + scoreToWin + " points.\n\nControls:\nTails - click on left side of screen or press 't'\nHeads - click on right side of screen or press 'h'", width/2, height/2);
  noLoop();
}

function draw() {
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
}

function resetGame() {
  choiceHistory = new Map();
  lastFourGuesses = "";
  computerScore = 0;
  userScore = 0;
  userChoice;
  computerGuess;
  gameIsOver = false;
  scoreToWin = 50;
}

function updateDisplay() {
  if (!gameIsOver) {
    background(255);
    showProgressBars();
    fill(0);
    textAlign(LEFT);
    textSize(textSizeVariable);
    let predictMessage = "I predicted ";
    let youPickedMessage = "You picked ";
    text(predictMessage, width/2 - textSizeVariable*2.7, height/2 - textSizeVariable*2.5);
    text(youPickedMessage, width/2 - textSizeVariable*2.7, height/2 - textSizeVariable);

    // colored choice variables
    fill(0, 0, 255);
    text(computerGuess, width/2 - textSizeVariable*2.7 + textWidth(predictMessage), height/2 - textSizeVariable*2.5);
    fill(0, 255, 0);
    text(userChoice, width/2 - textSizeVariable*2.7 + textWidth(youPickedMessage), height/2 - textSizeVariable);

    fill(0);
    textAlign(CENTER);
    text("User: " + userScore + "\nComputer: " + computerScore, width/2, height/2 + textSizeVariable*2.5);
  }
  else {
    background(255);
    textAlign(CENTER);
    textSize(textSizeVariable);
    if (userScore > computerScore) {
      fill(0, 255, 0);
      text("You win!\nI'm impressed!\nClick to play again.", width/2, height/2);
    }
    else {
      fill(0, 0, 255);
      text("You lose!\nBetter luck next time!\nClick to play again.", width/2, height/2);
    }
  }
}

function showProgressBars() {
  let barWidth = width / 6;
  //human
  noStroke();
  let percentToHumanWin = userScore / scoreToWin;
  fill(0, 255, 0);
  rect(0, height - height*percentToHumanWin, barWidth, height*percentToHumanWin);

  //computer
  let percentToComputerWin = computerScore / scoreToWin;
  fill(0, 0, 255);
  rect(width-barWidth, height - height*percentToComputerWin, barWidth, height*percentToComputerWin);
}

function keyTyped() {
  if (key === "h") {
    userChoice = "h";
    takeTurn();
  } else if (key === "t") {
    userChoice = "t";
    takeTurn();
  }
  else if (key === "s") {
    setup();
  }
}

function mousePressed() {
  if (gameIsOver) {
    setup();
  }
  if (mouseX < width/2) {
    userChoice = "h";
    takeTurn();
  }
  else {
    userChoice = "t";
    takeTurn();
  }
}

function takeTurn() {
  determineWinner();
  updateDisplay();
  rememberChoice();
  if (lastFourGuesses.length < 4) {
    lastFourGuesses = lastFourGuesses + userChoice;
  }
  else {
    lastFourGuesses = lastFourGuesses.substring(1,4) + userChoice; //tack on the newest guess on the right, only keeping the previous 3 on the right
  }
  predictUserChoice();
}

function rememberChoice() {
  if (lastFourGuesses.length === 4) {
    if (choiceHistory.has(lastFourGuesses)) {
      //keep track of whether this pick was heads or tails
      let headsCount = choiceHistory.get(lastFourGuesses).h;
      let tailsCount = choiceHistory.get(lastFourGuesses).t;
      if (userChoice === "h") {
        headsCount++;
      } else if (userChoice === "t") {
        tailsCount++;
      }
      choiceHistory.set(lastFourGuesses, {
        "h": headsCount,
        "t": tailsCount,
      });
    } else {
      if (userChoice === "h") {
        choiceHistory.set(lastFourGuesses, {
          "h": 1,
          "t": 0
        });
      } else {
        choiceHistory.set(lastFourGuesses, {
          "h": 0,
          "t": 1
        });
      }
    }
  }
}

function predictUserChoice() {
  if (choiceHistory.has(lastFourGuesses)) { //have seen this pattern before
    //predict cleverly
    if (choiceHistory.get(lastFourGuesses).t > choiceHistory.get(lastFourGuesses).h) {
      computerGuess = "t";
    } else if (choiceHistory.get(lastFourGuesses).h > choiceHistory.get(lastFourGuesses).t) {
      computerGuess = "h";
    } else {
      //predict randomly
      if (random(100) < 50) {
        computerGuess = "h";
      } else {
        computerGuess = "t";
      }
    }
  } else {
    //predict randomly
    if (random(100) < 50) {
      computerGuess = "h";
    } else {
      computerGuess = "t";
    }
  }
}

function determineWinner() {
  if (computerGuess === userChoice) {
    computerScore++;
  } else {
    userScore++;
  }
  // print("I predicted a " + computerGuess + ", and you picked " + userChoice);
  // print("User: " + userScore + "\tComputer: " + computerScore);
  if (computerScore === scoreToWin || userScore === scoreToWin) {
    gameIsOver = true;
  }
}