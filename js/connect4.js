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
