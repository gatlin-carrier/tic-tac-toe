window.onload = () => {
  const boxes = document.querySelectorAll(".box");
  const body = document.querySelector("body");
  const winningMessage = document.createElement("p");
  const winMessageDiv = document.querySelector("#win-message");
  const resetButton = document.querySelector("#reset-button");
  const playerOneScoreText = document.querySelector("#player-one");
  const playerTwoScoreText = document.querySelector("#player-two");
  const sideContainer = document.querySelector("#side-container");

  let turnNumber = 0;

  let moves = [];

  let scores = {
    playerOneScore: 0,
    playerTwoScore: 0
  };

  let stopGame = () => {
    boxes.forEach(box => {
      box.className = "disable-clicking";
    });
  };

  let updatePlayerScore = winner => {
    winner === "X" ? scores.playerTwoScore++ : scores.playerOneScore++;
    playerOneScoreText.innerHTML = `Player O: ${scores.playerOneScore}`;
    playerTwoScoreText.innerHTML = `Player X: ${scores.playerTwoScore}`;
  };

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

  resetButton.addEventListener("click", handleReset);

  let appendWinnerMessage = winner => {
    winningMessage.innerHTML = `<p class="win-message">Player ${winner} won in ${turnNumber} turns</p>`;
    sideContainer.append(winningMessage);
    gameOver = true;
    updatePlayerScore(winner);
  };

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

  boxes.forEach((box, boxIndex) => {
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
    box.addEventListener("click", turns);
  });
};
