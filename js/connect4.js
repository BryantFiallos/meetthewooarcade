///////////////////// CONSTANTS /////////////////////////////////////

///////////////////// APP STATE (VARIABLES) /////////////////////////
let board;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////

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

  render();
}




function takeTurn(e) {
  if (!win) {
    let index = squares.findIndex(function(square) {
      return square === e.target;
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
