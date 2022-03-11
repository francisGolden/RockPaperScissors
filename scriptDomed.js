let items = ["Rock", "Paper", "Scissors"];

function computerPlay(){
    
    const randomElement = items[Math.floor(Math.random() * items.length)];
    
    return randomElement;
}

playerCount = 0;
computerCount = 0;

function playRound(playerSelection, computerSelection) {
    
    computerSelection = computerPlay();
    let giocatore = document.querySelector("#player")
    giocatore.innerHTML = "Player: " + playerSelection;
    console.log("Player: " + playerSelection);

    let computer = document.querySelector("#computer")
    computer.innerHTML = "Computer: " + computerSelection;
    console.log("Computer: " + computerSelection);

    let risultato = document.querySelector("#risultato")
    let playerScore = document.querySelector("#player-score")
    let computerScore = document.querySelector("#computer-score")
    sum = 0

    if (playerSelection.toLowerCase() == items[0].toLowerCase() && computerSelection.toLowerCase() == items[1].toLowerCase()) {
        risultato.innerHTML = "Computer wins"
        console.log("Computer wins")
        computerCount += 1;
        computerScore.innerHTML = `${computerCount}`

    } else if (playerSelection.toLowerCase() == items[1].toLowerCase() && computerSelection.toLowerCase() == items[0].toLowerCase()) {
        risultato.innerHTML = "Player wins"
        
        playerCount += 1;
        playerScore.innerHTML = `${playerCount}`

    } else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        risultato.innerHTML = "Nobody wins!"
        

    } else if (playerSelection.toLowerCase() == items[2].toLowerCase() && computerSelection.toLowerCase() == items[0].toLowerCase()) {
        risultato.innerHTML = "Computer wins"
        computerCount += 1;
        computerScore.innerHTML = `${computerCount}`

    } else if (playerSelection.toLowerCase() == items[0].toLowerCase() && computerSelection.toLowerCase() == items[2].toLowerCase()) {
        risultato.innerHTML = "Player wins"

        playerCount += 1;
        playerScore.innerHTML = `${playerCount}`

    } else if (playerSelection.toLowerCase() == items[1].toLowerCase() && computerSelection.toLowerCase() == items[2].toLowerCase()) {
        risultato.innerHTML = "Computer wins"

        computerCount += 1;
        computerScore.innerHTML = `${computerCount}`

    } else if (playerSelection.toLowerCase() == items[2].toLowerCase() && computerSelection.toLowerCase() == items[1].toLowerCase()) {
        risultato.innerHTML = "Computer wins"

        computerCount += 1;
        computerScore.innerHTML = `${computerCount}`

    }
  

}

let seleziona = document.querySelectorAll('.selection')

let winner = document.querySelector("#winner")



// Array.from(seleziona).forEach(function(bottone) {
//     bottone.addEventListener("click", function() {
//         playRound(bottone.textContent)
//         if (playerCount == 5) {
//             winner.innerHTML = "PLAYER WINS!!!!!! LETS GOOOO"
             
            
//         } else if (computerCount == 5) {
//             winner.innerHTML = "COMPUTER WINS!!!!!!!!"
            
//         }
    
//     })
// })

function reset() {
    playerScore.innerHTML = `0`
    computerScore.innerHTML = '0'
    winner.innerHTML = "Waiting for the winner..."
}

Array.from(seleziona).forEach(function(bottone) {
    bottone.addEventListener("click", function() {
        
        if (playerCount < 5 && computerCount < 5) {
            winner.innerHTML = "we don't have a winner yet..."
            playRound(bottone.textContent)
        } else if (playerCount == 5) {
            winner.innerHTML = "PLAYER WINS"
               
        } else if (computerCount == 5) {
            winner.innerHTML = "COMPUTER WINS"
            
        }
    
    })
})





