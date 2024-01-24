
function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"]
    let random_index = Math.floor(Math.random() * 3)
    return choices[random_index]
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase()
    let computer = computerSelection.toLowerCase()
    if (player == computer){
        return "You Tie."
    }
    else if (player == "rock" && computer == "scissors"){
        return "You win! " + playerSelection + " beats " + computerSelection
    }
    else if (player == "paper" && computer == "rock"){
        return "You win! " + playerSelection + " beats " + computerSelection
    }
    else if (player == "scissors" && computer == " paper"){
        return "You win! " + playerSelection + "beats " + computerSelection
    }
    else {
        return "You loose! " + computerSelection + " beats " + playerSelection
    }
}


function move(){
    for (let i = 1; i <= 5; i++){
        let playerSelection = prompt("What's your choice?")
        let computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    }
}

move()