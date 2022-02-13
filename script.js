let items = ["Rock", "Paper", "Scissors"];

function computerPlay(){
    
    const randomElement = items[Math.floor(Math.random() * items.length)];
    
    return randomElement;
}



function playRound(playerSelection, computerSelection) {
    playerSelection = prompt();
    computerSelection = computerPlay();
    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);
    if (playerSelection.toLowerCase() == items[0].toLowerCase() && computerSelection.toLowerCase() == items[1].toLowerCase()) {
        console.log("Computer wins")
    } else if (playerSelection.toLowerCase() == items[1].toLowerCase() && computerSelection.toLowerCase() == items[0].toLowerCase()) {
        console.log("Player wins")
    } else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        console.log("Nobody wins!")
    } else if (playerSelection.toLowerCase() == items[2].toLowerCase() && computerSelection.toLowerCase() == items[0].toLowerCase()) {
        console.log("Computer wins")
    } else if (playerSelection.toLowerCase() == items[0].toLowerCase() && computerSelection.toLowerCase() == items[2].toLowerCase()) {
        console.log("Player wins")
    } else if (playerSelection.toLowerCase() == items[1].toLowerCase() && computerSelection.toLowerCase() == items[2].toLowerCase()) {
        console.log("Computer wins")
    } else if (playerSelection.toLowerCase() == items[2].toLowerCase() && computerSelection.toLowerCase() == items[1].toLowerCase()) {
        console.log("Computer wins")
    } else {
        console.log("You didn't write a valid value")
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}

game();


