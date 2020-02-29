///////////////////// CONSTANTS /////////////////////////////////////
const firstLeftWinConditions = [
  
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]

const firstMiddleWinConditions = [

  [11, 12, 13],
  [14, 15, 16],
  [17, 18, 19],
  [11, 14, 17],
  [12, 15, 18],
  [13, 16, 19],
  [11, 15, 19],
  [13, 15, 17]
]

const firstRightWinConditions = [

  [21, 22, 23],
  [24, 25, 26],
  [27, 28, 29],
  [21, 24, 27],
  [22, 25, 28],
  [23, 26, 29],
  [21, 25, 29],
  [23, 25, 27]
]

const secondLeftWinConditions = [

  [31, 32, 33],
  [34, 35, 36],
  [37, 38, 39],
  [31, 34, 37],
  [32, 35, 38],
  [33, 36, 39],
  [31, 35, 39],
  [33, 35, 37]
]

const secondMiddleWinConditions = [

  [41, 42, 43],
  [44, 45, 46],
  [47, 48, 49],
  [41, 44, 47],
  [42, 45, 48],
  [43, 46, 49],
  [41, 45, 49],
  [43, 45, 47]
]

const secondRightWinConditions = [

  [51, 52, 53],
  [54, 55, 56],
  [57, 58, 59],
  [51, 54, 57],
  [52, 55, 58],
  [53, 56, 59],
  [51, 55, 59],
  [53, 55, 57]
]

const thirdLeftWinConditions = [

  [61, 62, 63],
  [64, 65, 66],
  [67, 68, 69],
  [61, 64, 67],
  [62, 65, 68],
  [63, 66, 69],
  [61, 65, 69],
  [63, 65, 67]
]

const thirdMiddleWinConditions = [

  [71, 72, 73],
  [74, 75, 76],
  [77, 78, 79],
  [71, 74, 77],
  [72, 75, 78],
  [73, 76, 79],
  [71, 75, 79],
  [73, 75, 77]
]

const thirdRightWinConditions = [

  [81, 82, 83],
  [84, 85, 86],
  [87, 88, 89],
  [81, 84, 87],
  [82, 85, 88],
  [83, 86, 89],
  [81, 85, 89],
  [83, 85, 87]
]
///////////////////// APP STATE (VARIABLES) /////////////////////////
let board;
let turn;
let win;
let xWins = 0;
let oWins = 0;
let ties = 0;
let first = "X"
let gameWinner;
let currentSquare;
let firstLeftWin;
let firstMiddleWin;
let firstRightWin;
let secondLeftWin;
let secondMiddleWin;
let secondRightWin;
let thirdLeftWin;
let thirdMiddleWin;
let thirdRightWin;
let firstLeftWinner;
let firstMiddleWinner;
let firstRightWinner;
let secondLeftWinner;
let secondMiddleWinner;
let secondRightWinner;
let thirdLeftWinner;
let thirdMiddleWinner;
let thirdRightWinner;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const squares = Array.from(document.querySelectorAll("#board div"));
const message = document.querySelector("h2");
///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init;
document.getElementById("board").onclick = takeTurn;
document.getElementById("reset-button").onclick = init;
document.getElementById("xFirst").onclick = xFirst;
document.getElementById("oFirst").onclick = oFirst;
document.getElementById("reset-scoreboard").onclick = resetScoreboard;
///////////////////// FUNCTIONS /////////////////////////////////////
function init() {
  for (x = 0; x < 90; x++) {
    if (x % 10 === 0) {

    } else {
      squares[x].textContent = "";
    }
  }

  board = [
  ];

  turn = "X";
  render();
}

function render() {
  board.forEach(function(mark, index) {
    squares[index].textContent = mark;
  });

  message.textContent =
    win === "T" ? "It's a tie!" : win ? `${win} wins!` : `Turn: ${turn}`;
}

function takeTurn(e) {
  if (!gameWinner) {
    let index = squares.findIndex(function(square) {
      return square === e.target;
    });

    if (squares[index] === "") {
      board[index] = turn;
      turn = turn === "X" ? "O" : "X";
      win = getWinner();
      if (win === "T") {
        ties++;
        document.getElementById("tScore").innerHTML = ties;
      }

      render();
    }
  }
}

function getWinner() {
  let winner = null;

  winningConditions.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]]

    ) {
      winner = board[condition[0]];
      if (winner === "X") {
        xWins++;
        document.getElementById("xScore").innerHTML = xWins;
        playYuh();
      }
      else if (winner === "O") {
        oWins++;
        document.getElementById("oScore").innerHTML = oWins;
        playYuh();
      }

    }

  });

  return winner ? winner : board.includes("") ? null : "T";
}

function xFirst(){
  init();
  document.getElementById("turn").innerHTML = "Turn: X";
  turn = "X";
  first = "X"

}
function oFirst(){
  init();
  document.getElementById("turn").innerHTML = "Turn: O";
  turn = "O";
  first = "O"
}

function playYuh() {
  document.getElementById("myAudio").play();
}

function resetScoreboard() {
    xWins = 0;
    oWins = 0;
    ties = 0;

    document.getElementById("xScore").innerHTML = xWins;
    document.getElementById("tScore").innerHTML = ties;
    document.getElementById("oScore").innerHTML = oWins;
}
