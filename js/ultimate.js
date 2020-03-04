///////////////////// CONSTANTS /////////////////////////////////////
const winningConditions = [
  [0, 10, 20],
  [30, 40, 50],
  [60, 70, 80],
  [0, 30, 60],
  [10, 40, 70],
  [20, 50, 80],
  [0, 40, 80],
  [20, 40, 60]
];

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
let win = false;
let xWins = 0;
let oWins = 0;
let ties = 0;
let first = "X"
let nextMove;
let gameWinner;
let currentSquare;
let firstLeftWin = false;
let firstMiddleWin = false;
let firstRightWin = false;
let secondLeftWin = false;
let secondMiddleWin = false;
let secondRightWin = false;
let thirdLeftWin = false;
let thirdMiddleWin = false;
let thirdRightWin = false;
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
let squares = Array.from(document.querySelectorAll("#board div"));
const squares0 = squares[0].textContent;
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

if (squares[0].textContent != "") {
 squares[0].textContent = "";
for (var i = 1; i < 10; i++) {
  var el = document.createElement("div");
  el.setAttribute('class', 'mini-square');
  document.getElementById('first-left').appendChild(el);
}
}

if (squares[10].textContent != "") {
 squares[10].textContent = "";
for (var i = 1; i < 10; i++) {
  var el = document.createElement("div");
  el.setAttribute('class', 'mini-square');
  document.getElementById('first-middle').appendChild(el);
}
}

if (squares[20].textContent != "") {
 squares[20].textContent = "";
for (var i = 1; i < 10; i++) {
  var el = document.createElement("div");
  el.setAttribute('class', 'mini-square');
  document.getElementById('first-right').appendChild(el);
}
}

if (squares[30].textContent != "") {
 squares[30].textContent = "";
for (var i = 1; i < 10; i++) {
  var el = document.createElement("div");
  el.setAttribute('class', 'mini-square');
  document.getElementById('second-left').appendChild(el);
}
}

if (squares[40].textContent != "") {
 squares[40].textContent = "";
for (var i = 1; i < 10; i++) {
  var el = document.createElement("div");
  el.setAttribute('class', 'mini-square');
  document.getElementById('second-middle').appendChild(el);
}
}

if (squares[50].textContent != "") {
 squares[50].textContent = "";
for (var i = 1; i < 10; i++) {
  var el = document.createElement("div");
  el.setAttribute('class', 'mini-square');
  document.getElementById('second-right').appendChild(el);
}
}

if (squares[60].textContent != "") {
 squares[60].textContent = "";
for (var i = 1; i < 10; i++) {
  var el = document.createElement("div");
  el.setAttribute('class', 'mini-square');
  document.getElementById('third-left').appendChild(el);
}
}

if (squares[70].textContent != "") {
 squares[70].textContent = "";
for (var i = 1; i < 10; i++) {
  var el = document.createElement("div");
  el.setAttribute('class', 'mini-square');
  document.getElementById('third-middle').appendChild(el);
}
}

if (squares[80].textContent != "") {
 squares[80].textContent = "";
for (var i = 1; i < 10; i++) {
  var el = document.createElement("div");
  el.setAttribute('class', 'mini-square');
  document.getElementById('third-right').appendChild(el);
}
}

  board = [

  ];
document.getElementById("first-left").classList.remove("nextSquare");
document.getElementById("first-middle").classList.remove("nextSquare");
document.getElementById("first-right").classList.remove("nextSquare");
document.getElementById("second-left").classList.remove("nextSquare");
document.getElementById("second-middle").classList.remove("nextSquare");
document.getElementById("second-right").classList.remove("nextSquare");
document.getElementById("third-left").classList.remove("nextSquare");
document.getElementById("third-middle").classList.remove("nextSquare");
document.getElementById("third-right").classList.remove("nextSquare");


  turn = first;
  nextMove = "any"
  win = null;
  let firstLeftWin = false;
  let firstMiddleWin = false;
  let firstRightWin = false;
  let secondLeftWin = false;
  let secondMiddleWin = false;
  let secondRightWin = false;
  let thirdLeftWin = false;
  let thirdMiddleWin = false;
  let thirdRightWin = false;
  let firstLeftWinner = false;
  let firstMiddleWinner = false;
  let firstRightWinner = false;
  let secondLeftWinner = false;
  let secondMiddleWinner = false;
  let secondRightWinner = false;
  let thirdLeftWinner = false;
  let thirdMiddleWinner = false;
  let thirdRightWinner = false;
  squares = Array.from(document.querySelectorAll("#board div"));
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
  if (!win) {
    let index = squares.findIndex(function(square) {
      return square === e.target;
    });

console.log(index);

  if (nextMove == "any") {
    if (squares[index].textContent === "") {
      board[index] = turn;
      turn = turn === "X" ? "O" : "X";
      win = getWinner();
      nextMove = getNextMove(e);
      if (win === "T") {
        ties++;
        document.getElementById("tScore").innerHTML = ties;
      }

      render();
    }
  }




  else if (nextMove == "firstleft") {
    if (board[0] != "X" && board[0] != "O" && board[0] != "T") {


    if (index >= 1 && index <= 9) {
    if (squares[index].textContent === "") {
      board[index] = turn;
      turn = turn === "X" ? "O" : "X";
      win = getWinner();
      firstLeftWinner = getFirstLeftWinner(e);
      nextMove = getNextMove(e);
      document.getElementById("first-left").classList.remove("nextSquare");
      nextMove = getNextMove(e);

      if (win === "T") {
        ties++;
        document.getElementById("tScore").innerHTML = ties;
      }

      render();
    }
  }
}
  else {
    nextMove = "any"
  }
}


else if (nextMove == "firstmiddle") {
  if (board[10] != "X" && board[10] != "O" && board[10] != "T") {


  if (index >= 11 && index <= 19) {
  if (squares[index].textContent === "") {
    board[index] = turn;
    turn = turn === "X" ? "O" : "X";
    win = getWinner();
    firstMiddleWinner = getFirstMiddleWinner();

    document.getElementById("first-middle").classList.remove("nextSquare");
    nextMove = getNextMove(e);
    if (win === "T") {
      ties++;
      document.getElementById("tScore").innerHTML = ties;
    }

    render();
  }
}

}
else {
  nextMove = "any"
}
}


else if (nextMove == "firstright") {
  if (board[20] != "X" && board[20] != "O" && board[20] != "T") {


  if (index >= 21 && index <= 29) {
  if (squares[index].textContent === "") {
    board[index] = turn;
    turn = turn === "X" ? "O" : "X";
    win = getWinner();
    firstRightWinner = getFirstRightWinner();

    document.getElementById("first-right").classList.remove("nextSquare");
    nextMove = getNextMove(e);
    if (win === "T") {
      ties++;
      document.getElementById("tScore").innerHTML = ties;
    }

    render();
  }
}

}
else {
  nextMove = "any"
}
}



else if (nextMove == "secondleft") {
  if (board[30] != "X" && board[30] != "O" && board[30] != "T") {


  if (index >= 31 && index <= 39 ) {
  if (squares[index].textContent === "") {
    board[index] = turn;
    turn = turn === "X" ? "O" : "X";
    win = getWinner();
    secondLeftWinner = getSecondLeftWinner();

    document.getElementById("second-left").classList.remove("nextSquare");
    nextMove = getNextMove(e);
    if (win === "T") {
      ties++;
      document.getElementById("tScore").innerHTML = ties;
    }

    render();
  }
}

}
else {
  nextMove = "any"
}
}


else if (nextMove == "secondmiddle") {
  if (board[40] != "X" && board[40] != "O" && board[40] != "T") {
    document.getElementById("second-middle").classList.add("nextSquare");


  if (index >= 41 && index <= 49) {
  if (squares[index].textContent === "") {
    board[index] = turn;
    turn = turn === "X" ? "O" : "X";
    win = getWinner();
    secondMiddleWinner = getSecondMiddleWinner();

    document.getElementById("second-middle").classList.remove("nextSquare");
    nextMove = getNextMove(e);
    if (win === "T") {
      ties++;
      document.getElementById("tScore").innerHTML = ties;
    }

    render();
  }
}
}
else {
  nextMove = "any"
}
}


else if (nextMove == "secondright") {
  if (board[50] != "X" && board[50] != "O" && board[50] != "T") {


  if (index >= 51 && index <= 59) {
  if (squares[index].textContent === "") {
    board[index] = turn;
    turn = turn === "X" ? "O" : "X";
    win = getWinner();
    secondRightWinner = getSecondRightWinner();

    document.getElementById("second-right").classList.remove("nextSquare");
    nextMove = getNextMove(e);
    if (win === "T") {
      ties++;
      document.getElementById("tScore").innerHTML = ties;
    }

    render();
  }
}
}
else {
  nextMove = "any"
}
}


else if (nextMove == "thirdleft") {
  if (board[60] != "X" && board[60] != "O" && board[60] != "T") {


  if (index >= 61 && index <= 69) {
  if (squares[index].textContent === "") {
    board[index] = turn;
    turn = turn === "X" ? "O" : "X";
    win = getWinner();
    thirdLeftWinner = getThirdLeftWinner();

    document.getElementById("third-left").classList.remove("nextSquare");
    nextMove = getNextMove(e);
    if (win === "T") {
      ties++;
      document.getElementById("tScore").innerHTML = ties;
    }

    render();
  }
}
}
else {
  nextMove = "any"
}
}


else if (nextMove == "thirdmiddle") {
  if (board[70] != "X" && board[70] != "O" && board[70] != "T") {


  if (index >= 71 && index <= 79) {
    if (squares[index].textContent === "") {
    board[index] = turn;
    turn = turn === "X" ? "O" : "X";
    win = getWinner();
    thirdMiddleWinner = getThirdMiddleWinner();

    document.getElementById("third-middle").classList.remove("nextSquare");
    nextMove = getNextMove(e);
    if (win === "T") {
      ties++;
      document.getElementById("tScore").innerHTML = ties;
    }

    render();
  }
}
}
else {
  nextMove = "any"
}
}


else if (nextMove == "thirdright") {
  if (board[80] != "X" && board[80] != "O" && board[80] != "T") {


  if (index >= 81 && index <= 89) {
  if (squares[index].textContent === "") {
    board[index] = turn;
    turn = turn === "X" ? "O" : "X";
    win = getWinner();
    thirdRightWinner = getThirdRightWinner();

    document.getElementById("third-right").classList.remove("nextSquare");
    nextMove = getNextMove(e);
    if (win === "T") {
      ties++;
      document.getElementById("tScore").innerHTML = ties;
    }

    render();
  }
}
}
else {
  nextMove = "any"
}
}

else {
  return false;
}

win = getWinner();
firstLeftWinner = getFirstLeftWinner();
firstMiddleWinner = getFirstMiddleWinner();
firstRightWinner = getFirstRightWinner();
sencondLeftWinner = getSecondLeftWinner();
secondMiddleWinner = getSecondMiddleWinner();
secondRightWinner = getSecondRightWinner();
thirdLeftWinner = getThirdLeftWinner();
thirdMiddleWinner = getThirdMiddleWinner();
thirdRightWinner = getThirdRightWinner();
render();
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
      win = winner;
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

  if (!winner && board[0] != undefined && board[10] != undefined && board[20] != undefined && board[30] != undefined && board[40] != undefined && board[50] != undefined && board[60] != undefined && board[70] != undefined && board[80] != undefined) {
    winner = "T";
    win = winner;


  }

  return winner ? winner : board.includes(undefined) ? null : "T";
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


function resetScoreboard() {
    xWins = 0;
    oWins = 0;
    ties = 0;

    document.getElementById("xScore").innerHTML = xWins;
    document.getElementById("tScore").innerHTML = ties;
    document.getElementById("oScore").innerHTML = oWins;
}

function playYuh() {
  document.getElementById("myAudio").play();
}

function getNextMove(e) {

  let index = squares.findIndex(function(square) {
    return square === e.target;
  });

  if (index % 10 == 1) {
    if (board[0] == undefined) {
      nextMove = "firstleft"
      document.getElementById("first-left").classList.add("nextSquare");
    }
    else if (board[0] != undefined) {
      nextMove = "any";

    }

  }


  if (index % 10 == 2) {
    if (board[10] == undefined) {
      nextMove = "firstmiddle"
      document.getElementById("first-middle").classList.add("nextSquare");
    }
    else if (board[10] != undefined) {
      nextMove = "any";

    }


  }


  if (index % 10 == 3) {
    if (board[20] == undefined) {
      nextMove = "firstright"
      document.getElementById("first-right").classList.add("nextSquare");
    }
    else if (board[20] != undefined) {
      nextMove = "any";

    }


  }


  if (index % 10 == 4) {
    if (board[30] == undefined) {
      nextMove = "secondleft"
      document.getElementById("second-left").classList.add("nextSquare");
    }
    else if (board[30] != undefined) {
      nextMove = "any";

    }


  }



  if (index % 10 == 5) {
    if (board[40] == undefined) {
      nextMove = "secondmiddle"
      document.getElementById("second-middle").classList.add("nextSquare");
    }
    else if (board[40] != undefined) {
      nextMove = "any";

    }


  }


  if (index % 10 == 6) {
    if (board[50] == undefined) {
      nextMove = "secondright"
      document.getElementById("second-right").classList.add("nextSquare");
    }
    else if (board[50] != undefined) {
      nextMove = "any";

    }


  }


  if (index % 10 == 7) {
    if (board[60] == undefined) {
      nextMove = "thirdleft"
      document.getElementById("third-left").classList.add("nextSquare");
    }
    else if (board[60] != undefined) {
      nextMove = "any";

    }


  }


  if (index % 10 == 8) {
    if (board[70] == undefined) {
      nextMove = "thirdmiddle"
      document.getElementById("third-middle").classList.add("nextSquare");
    }
    else if (board[70] != undefined) {
      nextMove = "any";

    }


  }


  if (index % 10 == 9) {
    if (board[80] == undefined) {
      nextMove = "thirdright"
      document.getElementById("third-right").classList.add("nextSquare");
    }
    else if (board[80] != undefined) {
      nextMove = "any";

    }


  }

  return nextMove;

}


function getFirstLeftWinner(e) {
let firstLeftWin = false;
  firstLeftWinConditions.forEach(function(condition, index) {
  if (
    board[condition[0]] &&
    board[condition[0]] === board[condition[1]] &&
    board[condition[1]] === board[condition[2]]
  ) {

  winner = board[condition[0]];
  firstLeftWin = true;
  firstLeftWinner = winner;

  board[0] = winner;

}
});

if (!firstLeftWin && board[1] != undefined && board[2] != undefined && board[3] != undefined && board[4] != undefined && board[5] != undefined && board[6] != undefined && board[7] != undefined && board[8] != undefined && board[9] != undefined) {
  winner = "T";
  firstLeftWinner = winner;
  board[0] = winner;

}

}


function getFirstMiddleWinner() {
  let firstMiddleWin = false;

  firstMiddleWinConditions.forEach(function(condition, index) {
  if (
    board[condition[0]] &&
    board[condition[0]] === board[condition[1]] &&
    board[condition[1]] === board[condition[2]]
  ) {

  winner = board[condition[0]];
  firstMiddleWin = true;
  firstMiddleWinner = winner;

  board[10] = winner;
}
});

if (!firstMiddleWin && board[11] != undefined && board[12] != undefined && board[13] != undefined && board[14] != undefined && board[15] != undefined && board[16] != undefined && board[17] != undefined && board[18] != undefined && board[19] != undefined) {
  winner = "T";
  firstMiddleWinner = winner;
  board[10] = winner;

}

}


function getFirstRightWinner() {
  let firstRightWin = false;

  firstRightWinConditions.forEach(function(condition, index) {
  if (
    board[condition[0]] &&
    board[condition[0]] === board[condition[1]] &&
    board[condition[1]] === board[condition[2]]
  ) {

  winner = board[condition[0]];
  firstRightWin = true;
  firstRightWinner = winner;

  board[20] = winner;
}
});

if (!firstRightWin && board[21] != undefined && board[22] != undefined && board[23] != undefined && board[24] != undefined && board[25] != undefined && board[26] != undefined && board[27] != undefined && board[28] != undefined && board[29] != undefined) {
  winner = "T";
  firstRightWinner = winner;
  board[20] = winner;

}

}


function getSecondLeftWinner() {
  secondLeftWin = false;

  secondLeftWinConditions.forEach(function(condition, index) {
  if (
    board[condition[0]] &&
    board[condition[0]] === board[condition[1]] &&
    board[condition[1]] === board[condition[2]]
  ) {

  winner = board[condition[0]];
  secondLeftWin = true;
  secondLeftWinner = winner;

  board[30] = winner;
}
});

if (!secondLeftWin && board[31] != undefined && board[32] != undefined && board[33] != undefined && board[34] != undefined && board[35] != undefined && board[36] != undefined && board[37] != undefined && board[38] != undefined && board[39] != undefined) {
  winner = "T";
  secondLeftWinner = winner;
  board[30] = winner;

}

}


function getSecondMiddleWinner() {
let secondMiddleWin = false;
  secondMiddleWinConditions.forEach(function(condition, index) {
  if (
    board[condition[0]] &&
    board[condition[0]] === board[condition[1]] &&
    board[condition[1]] === board[condition[2]]
  ) {

  winner = board[condition[0]];
  secondMiddleWin = true;
  secondMiddleWinner = winner;

  board[40] = winner;
}

});

if (!secondMiddleWin && board[41] != undefined && board[42] != undefined && board[43] != undefined && board[44] != undefined && board[45] != undefined && board[46] != undefined && board[47] != undefined && board[48] != undefined && board[49] != undefined) {
  winner = "T";
  secondMiddleWinner = winner;
  board[40] = secondMiddleWinner;

}
return secondMiddleWinner;
}


function getSecondRightWinner() {

let secondRightWin = false;
  secondRightWinConditions.forEach(function(condition, index) {
  if (
    board[condition[0]] &&
    board[condition[0]] === board[condition[1]] &&
    board[condition[1]] === board[condition[2]]
  ) {

  winner = board[condition[0]];
  secondRightWin = true;
  secondRightWinner = winner;

  board[50] = winner;
}
});

if (!secondRightWin && board[51] != undefined && board[52] != undefined && board[53] != undefined && board[54] != undefined && board[55] != undefined && board[56] != undefined && board[57] != undefined && board[58] != undefined && board[59] != undefined) {
  winner = "T";
  secondRightWinner = winner;
  board[50] = secondRightWinner;


}

}


function getThirdLeftWinner() {
  let thirdLeftWin = false;

  thirdLeftWinConditions.forEach(function(condition, index) {
  if (
    board[condition[0]] &&
    board[condition[0]] === board[condition[1]] &&
    board[condition[1]] === board[condition[2]]
  ) {

  winner = board[condition[0]];
  thirdLeftWin = true;
  thirdLeftWinner = winner;

  board[60] = winner;
}
});

if (!thirdLeftWin && board[61] != undefined && board[62] != undefined && board[63] != undefined && board[64] != undefined && board[65] != undefined && board[66] != undefined && board[67] != undefined && board[68] != undefined && board[69] != undefined) {
  winner = "T";
  thirdLeftWinner = winner;
  board[60] = winner;

}

}


function getThirdMiddleWinner() {
  let thirdMiddleWin = false;

  thirdMiddleWinConditions.forEach(function(condition, index) {
  if (
    board[condition[0]] &&
    board[condition[0]] === board[condition[1]] &&
    board[condition[1]] === board[condition[2]]
  ) {

  winner = board[condition[0]];
  thirdMiddleWin = true;
  thirdMiddleWinner = winner;

  board[70] = winner;
}
});

if (!thirdMiddleWin && board[71] != undefined && board[72] != undefined && board[73] != undefined && board[74] != undefined && board[75] != undefined && board[76] != undefined && board[77] != undefined && board[78] != undefined && board[79] != undefined) {
  winner = "T";
  thirdMiddleWinner = winner;
  board[70] = winner;

}

}


function getThirdRightWinner() {
  let thirdRightWin = false;

  thirdRightWinConditions.forEach(function(condition, index) {
  if (
    board[condition[0]] &&
    board[condition[0]] === board[condition[1]] &&
    board[condition[1]] === board[condition[2]]
  ) {

  winner = board[condition[0]];
  thirdRightWin = true;
  thirdRightWinner = winner;

  board[80] = winner;
}
});

if (!thirdLeftWin && board[81] != undefined && board[82] != undefined && board[83] != undefined && board[84] != undefined && board[85] != undefined && board[86] != undefined && board[87] != undefined && board[88] != undefined && board[89] != undefined) {
  winner = "T";
  thirdRightWinner = winner;
  board[80] = winner;

}

}


function playAgain() {
  location.reload();
}
