//Game shall have 3x3 Grid 
//Grid shall be clickable
//grid shall display current players turn 
//Grid shall have reset button
console.log("We are linked!")


let playerTurn = "X"
let moves = [
    "", "", "", 
    "", "", "", 
    "", "", ""];
let counter = 0;

const boxes = document.querySelectorAll('.cell');
const resetButton = document.querySelector("#game-restart");
const message = document.querySelector("#message")

function boxEventListener() {
    moves[this.id] = playerTurn;
    counter++;
    this.innerHTML = playerTurn;
    winLogic();

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

function removeEvents(){
    boxes.forEach(box => {
        box.removeEventListener("click", boxEventListener)
    })
}
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    function winLogic(){
        let roundWon = false; 
        for (let i = 0; i<=7; i++) {
            const winCondition = winningConditions[i];
            let a = moves[winCondition[0]];
            let b = moves[winCondition[1]];
            let c = moves[winCondition[2]];
            if (a === '' || b=== '' || c === ''){
                continue; 
            }
            if (a === b && b === c){
                roundWon = true; 
                removeEvents();
                break
            }
        }
        if (roundWon) {
            message.innerHTML = `${playerTurn} is the winner!`;
            removeEvents();
            return;

        } else if (counter === 9){
            message.innerHTML = "It's a draw!";
            removeEvents();
        }
        
    }