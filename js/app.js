window.onload = () => {
  const boxes = document.querySelectorAll(".box");
  const winningMessage = document.createElement("p");
  const resetButton = document.querySelector("#reset-button");
  const playerOneScoreText = document.querySelector("#player-one");
  const playerTwoScoreText = document.querySelector("#player-two");
  const sideContainer = document.querySelector("#side-container");
  // a counter to track which turn it is
  let turnNumber = 0;
  // an array that keeps track of the player's moves
  let moves = [];

  let scores = {
    playerOneScore: 0,
    playerTwoScore: 0
  };
  // function that disable the player from being able to click the boxes after a win condition is met
  let stopGame = () => {
    boxes.forEach(box => {
      box.className = "disable-clicking";
    });
  };
  // a function that is passed the winner variable from the checkForWin function and then adds one to either player X or player O
  let updatePlayerScore = winner => {
    winner === "X" ? scores.playerTwoScore++ : scores.playerOneScore++;
    playerOneScoreText.innerHTML = `Player O: ${scores.playerOneScore}`;
    playerTwoScoreText.innerHTML = `Player X: ${scores.playerTwoScore}`;
  };
  // resets basically everything back to the start condition except the scores
  let handleReset = () => {
    boxes.forEach(box => {
      box.innerText = "";
    });
    winningMessage.remove();
    turnNumber = 0;
    moves = [];
    boxes.forEach(box => {
      box.className = "box";
    });
  };
  // attaches handleReset function to reset/play again button
  resetButton.addEventListener("click", handleReset);
  // a function that is passed the winner variable and then appends a message that declares the winner based on that variable
  let appendWinnerMessage = winner => {
    winningMessage.innerHTML = `<p class="win-message">Player ${winner} won in ${turnNumber} turns</p>`;
    sideContainer.append(winningMessage);
    gameOver = true;
    updatePlayerScore(winner);
  };
  // function with conditional logic that checks if a win condition has been met
  let checkForWin = () => {
    // row 1
    if (
      moves[0] !== undefined &&
      moves[0] === moves[1] &&
      moves[1] === moves[2]
    ) {
      stopGame();
      return appendWinnerMessage(moves[0]);
    }
    // row 2
    else if (
      moves[3] !== undefined &&
      moves[3] === moves[4] &&
      moves[4] === moves[5]
    ) {
      stopGame();
      return appendWinnerMessage(moves[3]);
    }
    // row 3
    else if (
      moves[6] !== undefined &&
      moves[6] === moves[7] &&
      moves[7] === moves[8]
    ) {
      stopGame();
      return appendWinnerMessage(moves[6]);
    }
    // column 1
    else if (
      moves[0] !== undefined &&
      moves[0] === moves[3] &&
      moves[3] === moves[6]
    ) {
      stopGame();
      return appendWinnerMessage(moves[0]);
    }
    // column 2
    else if (
      moves[1] !== undefined &&
      moves[1] === moves[4] &&
      moves[4] === moves[7]
    ) {
      stopGame();
      return appendWinnerMessage(moves[1]);
    }
    // column 3
    else if (
      moves[2] !== undefined &&
      moves[2] === moves[5] &&
      moves[5] === moves[8]
    ) {
      stopGame();
      return appendWinnerMessage(moves[2]);
    }
    // diagonal 1
    else if (
      moves[0] !== undefined &&
      moves[0] === moves[4] &&
      moves[4] === moves[8]
    ) {
      stopGame();
      return appendWinnerMessage(moves[0]);
    }
    // diagonal 2
    else if (
      moves[2] !== undefined &&
      moves[2] === moves[4] &&
      moves[4] === moves[6]
    ) {
      stopGame();
      return appendWinnerMessage(moves[2]);
    }
    // tie
    else if (turnNumber === 9) {
      stopGame();
      winningMessage.innerHTML = "<p class='win-message'>CAT!</p>";
      sideContainer.append(winningMessage);
    }
  };
  // loops through each box
  boxes.forEach((box, boxIndex) => {
    // a handler that determines if it is empty, then adds an X or O depending on if turnNumber is even or odd. It then adds one to turn number and checks for a win.
    let turns = () => {
      if (
        turnNumber % 2 === 0 &&
        box.innerText !== "X" &&
        box.innerText !== "O"
      ) {
        box.innerText = "X";
        moves[boxIndex] = "X";
        turnNumber++;
        checkForWin();
      }
      if (
        turnNumber % 1 === 0 &&
        box.innerText !== "X" &&
        box.innerText !== "O"
      ) {
        box.innerText = "O";
        moves[boxIndex] = "O";
        turnNumber++;
        checkForWin();
      }
    };
    //attaches the turns function to each box
    box.addEventListener("click", turns);
  });
};
