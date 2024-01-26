
function start_game(){
    player_score = 0
    computer_score = 0
    rock.addEventListener('click', rock_handler)
    paper.addEventListener('click', paper_handler)
    scissors.addEventListener('click', scissors_handler)
    playerScore.textContent = 'You: '
    computerScore.textContent = 'Computer: '
    results.textContent = ''

}

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"]
    let random_index = Math.floor(Math.random() * 3)
    return choices[random_index]
}

function checkChoices(player, computer){
    if (player == computer){
        return "tie"
    }
    else if ((player == "Rock" && computer == "Scissors") || 
        (player == "Paper" && computer == "Rock") || 
        (player == "Scissors" && computer == "Paper"))
    return 'win'
    
    else return 'loose'
}

function calcResults(playerChoice) {
    
    let computerChoice = getComputerChoice()
    let playResults = checkChoices(playerChoice, computerChoice)
    if (playResults == 'win'){
        results.textContent = "You win! " + playerChoice + " beats " + computerChoice
        player_score ++
        playerScore.textContent = "You: "+ player_score
    }
    else if (playResults == 'loose'){
        results.textContent = "You loose! " + computerChoice + " beats " + playerChoice
        computer_score ++
        computerScore.textContent = "Computer: "+ computer_score
    }
    else {
        results.textContent = "You Tied"
    }
    if (player_score >= 5 || computer_score >= 5) {
        decidewinner(player_score, computer_score)
        rock_remover()
        paper_remover()
        scissors_remover()
    }

}

function decidewinner(player_score, computer_score) {
    if (player_score > computer_score) {
        results.textContent = "WoW I Couldn't THink You'd WiN"
    }
    else {
        results.textContent = "LuCKy For YOu, IT's JuSt RaNDom"
    }
}


const rock_handler = function() {calcResults('Rock')}
const paper_handler = function() {calcResults('Paper')}
const scissors_handler = function() {calcResults('Scissors')}
const rock_remover = function() {rock.removeEventListener('click', rock_handler)};
const paper_remover = function() {paper.removeEventListener('click', paper_handler)}
const scissors_remover = function() {scissors.removeEventListener('click', scissors_handler)}

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const results = document.querySelector('.results')
const divScore = document.querySelector('.score')
const restart = document.querySelector('.restart')

const playerScore = document.createElement('p')
const computerScore = document.createElement('p')
divScore.append(playerScore, computerScore)

let player_score = 0
let computer_score = 0


restart.addEventListener('click', start_game)
start_game()
