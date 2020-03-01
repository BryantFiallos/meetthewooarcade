fufunction takeTurn(e) {

  if (e.target.id == "board") {
    return false;
  }
  if (!win) {
    let index = dots.findIndex(function(dot) {
      return dot === e.target;
    });


    let row1 = index % 7;

    if (board[index] === "") {

      while (board[index + 7] === "") {
        let i = index + 7;
        document.getElementById("dot" + i + "").classList.add(turn);
        board[i] = turn;
        document.getElementById("dot" + index + "").classList.remove(turn);
        board[index] = "";
        index = i;

      }
      if (board[index] === "") {
        document.getElementById("dot" + index + "").classList.add(turn);
        board[index] = turn;

      }

      }
      else if (board[index] !== "") {
        if (board[row1] === "") {
          while (board[row1 + 7] === "") {
            let i = row1 + 7;
            document.getElementById("dot" + i + "").classList.add(turn);
            board[i] = turn;
            document.getElementById("dot" + row1 + "").classList.remove(turn);
            board[row1] = "";
            row1 = i;

          }
          if (board[row1] === "") {
            document.getElementById("dot" + row1 + "").classList.add(turn);
            board[row1] = turn;

          }

        }
      }
      if (board[row1] !== "") {
        return false;

      }

      }

      turn = turn === "Red" ? "Yellow" : "Red";
      win = getWinner();
      if (win === "T") {
        ties++;
        document.getElementById("tScore").innerHTML = ties;
      }

      render();
    }

    ///////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    function takeTurn(e) {
  if (!win) {
    let index = dots.findIndex(function(dot) {
      return dot === e.target;
    });


    let row1 = index % 7;

    if (board[index] === "") {

      while (board[index + 7] === "") {
        let i = index + 7;
        document.getElementById("dot" + i + "").classList.add(turn);
        board[i] = turn;
        document.getElementById("dot" + index + "").classList.remove(turn);
        board[index] = "";
        index = i;

      }
      if (board[index] === "") {
        document.getElementById("dot" + index + "").classList.add(turn);
        board[index] = turn;

      }

      }
      else if (board[index] !== "") {
        if (board[row1] === "") {
          while (board[row1 + 7] === "") {
            let i = row1 + 7;
            document.getElementById("dot" + i + "").classList.add(turn);
            board[i] = turn;
            document.getElementById("dot" + row1 + "").classList.remove(turn);
            board[row1] = "";
            row1 = i;

          }
          if (board[row1] === "") {
            document.getElementById("dot" + row1 + "").classList.add(turn);
            board[row1] = turn;

          }

        }
      }
      else if (board[row1] !== "") {
        alert("choose");

      }

      }

      turn = turn === "Red" ? "Yellow" : "Red";
      win = getWinner();
      if (win === "T") {
        ties++;
        document.getElementById("tScore").innerHTML = ties;
      }

      render();
    }
