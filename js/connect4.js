///////////////////// CONSTANTS /////////////////////////////////////

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

///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init;
document.getElementById("board").onclick = takeTurn;
document.getElementById("reset-button").onclick = init;
///////////////////// FUNCTIONS /////////////////////////////////////

function init() {
  board = [
    "", "", "", "", "", "", ""
    "", "", "", "", "", "", ""
    "", "", "", "", "", "", ""
    "", "", "", "", "", "", ""
    "", "", "", "", "", "", ""
    "", "", "", "", "", "", ""
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
