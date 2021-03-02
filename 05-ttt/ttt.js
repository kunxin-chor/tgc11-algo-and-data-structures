const prompt = require('prompt-sync')();

function printBoard(board) {
    let str = "";
    for (let eachRow of board) {
        for (let eachCol of eachRow) {
            str += ' '+ eachCol +' ';
        }
        str +="\n";
    }
    console.log(str);
}


let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]

];
let currentPlayer = 1;
let winningPlayer = -1;
let movesLeft = 9;
while (true) {
    printBoard(board);
    
    console.log("Player "+currentPlayer+"'s turn")

    let row = prompt("Enter which row: ");
    let col = prompt("Enter which col: ");
    board[row][col] = currentPlayer;

    for (let r = 0; r < 3; r++) {
        if (board[r][0] != 0 &&
            board[r][0] == board[r][1] &&
            board[r][1] == board[r][2])
            {
                winningPlayer = board[r][0];
            }
    }
    for (let c =0; c < 3; c++) {
    if (board[0][c] != 0 &&
        board[0][c] == board[1][c] && 
        board[1][c] == board[2][c]) {
            winningPlayer = board[0][c]
        }
    }
  
    if (winningPlayer != -1) {
        break;
    }

    if (board[0][0] !=0 &&
        board[0][0]==board[1][1] &&
        board[1][1]==board[2][2]) {
            winningPlayer = board[0][0];
        }

    if (board[0][2] != 0 &&
        board[0][2] == board[1][1] &&
        board[1][1] == board[2[1]]) {
            winningPlayer = board[0][2];
        }

    movesLeft -= 1;

    if (movesLeft == 0) {
        break;
    }

    // switch player
    if (currentPlayer==1) {
        currentPlayer=2;
    } else {
        currentPlayer=1;
    }


}



