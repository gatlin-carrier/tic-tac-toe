window.onload = () => {
  const boxes = document.querySelectorAll(".box");
  const body = document.querySelector("body");
  const winningMessage = document.createElement("p");
  const winMessageDiv = document.querySelector("#win-message");
  let gameOver = false;

  let turnNumber = 0;

  let moves = [, , , , , , , , ,];

  let appendWinnerMessage = winner => {
    winningMessage.innerText = `Player ${winner} won in ${turnNumber} turns`;
    winMessageDiv.append(winningMessage);
  };

  let checkForWin = () => {
    // row 1
    if (
      moves[0] !== undefined &&
      moves[0] === moves[1] &&
      moves[1] === moves[2]
    ) {
      return appendWinnerMessage(moves[0]);
    }
    // row 2
    else if (
      moves[3] !== undefined &&
      moves[3] === moves[4] &&
      moves[4] === moves[5]
    ) {
      return appendWinnerMessage(moves[3]);
    }
    // row 3
    else if (
      moves[6] !== undefined &&
      moves[6] === moves[7] &&
      moves[7] === moves[8]
    ) {
      appendWinnerMessage(moves[6]);
    }
    // column 1
    else if (
      moves[0] !== undefined &&
      moves[0] === moves[3] &&
      moves[3] === moves[6]
    ) {
      appendWinnerMessage(moves[0]);
    }
    // column 2
    else if (
      moves[1] !== undefined &&
      moves[1] === moves[4] &&
      moves[4] === moves[7]
    ) {
      appendWinnerMessage(moves[1]);
    }
    // column 3
    else if (
      moves[2] !== undefined &&
      moves[2] === moves[5] &&
      moves[5] === moves[8]
    ) {
      appendWinnerMessage(moves[2]);
    }
    // diagonal 1
    else if (
      moves[0] !== undefined &&
      moves[0] === moves[4] &&
      moves[4] === moves[8]
    ) {
      appendWinnerMessage(moves[0]);
    }
    // diagonal 2
    else if (
      moves[2] !== undefined &&
      moves[2] === moves[4] &&
      moves[4] === moves[6]
    ) {
      appendWinnerMessage(moves[2]);
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
        console.log(moves);
        checkForWin();
      } else {
        box.innerText = "O";
        moves[boxIndex] = "O";
        turnNumber++;
        console.log(moves);
        checkForWin();
      }
    };
    box.addEventListener("click", turns);
  });
};
