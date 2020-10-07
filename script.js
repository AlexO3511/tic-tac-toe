//Game shall have 3x3 Grid 
//Grid shall be clickable
//grid shall display current players turn 
//Grid shall have reset utton
// console.log("We are here now")

// document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', clickedCell));

// function clickedCell(clickedCellEvent) {
//     const clickedCell = clickedCellEvent.target;
//     const clickedCellIndex = parseInt(clickedCell.getAttribute('cell-index'));
//     console.log(clickedCellIndex)
    
// }

let playerTurn = "X"
let moves = ["", "", "", "", "", "", "", "", ""];
let counter = 0;

const boxes = document.querySelectorAll('.cell');
const resetButton = document.querySelector("#game-restart");

function boxEventListener() {
    moves[this.id] = playerTurn;
    counter++;
    console.log(moves)
    console.log(counter)

    this.innerHTML = playerTurn;

    if (playerTurn === "X"){
        playerTurn ="O";
    } else {
        playerTurn = "X";
    }
}

boxes.forEach(box => {
    box.addEventListener('click', boxEventListener, { once: true})
});

function resetGame() {
    playerTurn = "X";
    moves = ["", "", "", "", "", "", "", "", ""];
    counter = 0;

    boxes.forEach(box => {
        box.innerHTML = "";
        box.removeEventListener("click", boxEventListener)
        box.addEventListener('click', boxEventListener, { once: true})

    });


}

resetButton.addEventListener("click", resetGame);