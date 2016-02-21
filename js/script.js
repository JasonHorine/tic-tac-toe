
// document ready:
$(function(){
  console.log("doc ready fired");
//publish to the board

});

// initialize the variable for the cells
var cellStatus = [null, null, null, null, null, null, null, null, null];
var p1Score = 0;
var p2Score = 0;
var goal = 3; // default gave is best 2/3
var goesFirst = 0;  // player 0 goes first on first round


function resetBoard(){
  //reset the game board for a new game
  cellStatus = [null, null, null, null, null, null, null, null, null];
  // toggle who starts first
  goesFirst != goesFirst;
}

// game option menu support:

function playTo(rounds){
  // if score != 0:0 and getWinner = false
    // prompt are you sure?
      // yes: set goal to (rounds)
      // no: return
  // else set goal to (rounds), reset game, return
}



function resetGame(){
  //if score = 0:0
    // call resetBoard()
    // clear the scores
  //prompt: are you sure?
    //No: no action
    //Yes:
      //call resetBoard()
      //clear the scores
}

// function getCell(cell){
//   // cell: where first char is row, second is col
//   // return 0, 1 or null
// }

function setCell(cell, playerNumber){
  //
}

function getRoundWinner(){
  // check to see whether a winner exists
  // check rows
  if (cellStatus[0] == cellStatus[1] && cellStatus[1] == cellStatus 2){
    return cellStatus[0];
  } else if (cellStatus[3] == cellStatus[4] && cellStatus[4] == cellStatus 5){
    return cellStatus[3];
  } else if ((cellStatus[6] == cellStatus[7] && cellStatus[7] == cellStatus 8)){
    return cellStatus[6];
  }
  // check columns
  // check diagonals
  // return p1, p2 or null
}

function getGameWinner(){
  // check to see whethere a round winner exists
  // return p1, p2 or null
}

function celebrate(playerNumber){
  // if a winner if found acknowledge the player and increment score
}



// pseudo code:

