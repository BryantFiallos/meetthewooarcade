///////////////////// CONSTANTS /////////////////////////////////////
const winningConditions = [
  [35, 28, 21, 14]
  [28, 21, 14, 7]


]
///////////////////// APP STATE (VARIABLES) /////////////////////////
let board;
let turn;
let win;
let redWins = 0;
let yellowWins = 0;
let ties = 0;
let first;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const dots = Array.from(document.querySelectorAll("#board div"));
const message = document.querySelector("h2");
///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init;
document.getElementById("board").onclick = takeTurn;

///////////////////// FUNCTIONS /////////////////////////////////////

function init() {
  board = [
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
  ];
  turn = "Red"
  win = null

  render();
}


function render() {
  board.forEach(function(mark, index) {
    dots[index].textContent = mark;
  });

  message.textContent =
    win === "T" ? "It's a tie!" : win ? `${win} wins!` : `Turn: ${turn}`;
}

function takeTurn(e) {
  if (!win) {
    let index = dots.findIndex(function(dot) {
      return dot === e.target;
    });

    if (board[index] === "") {
      board[index] = turn;
      turn = turn === "Red" ? "Yellow" : "Red";
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
      board[conition[1]] === board[condition[2]]
    ) {
      winner = board[condition[0]];
    }
  });

  return winner;
}
