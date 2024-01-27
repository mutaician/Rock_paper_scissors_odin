
function start_game(){
    player_score = 0
    computer_score = 0
    rock.addEventListener('click', rock_handler)
    paper.addEventListener('click', paper_handler)
    scissors.addEventListener('click', scissors_handler)
    lizard.addEventListener('click', lizard_handler)
    spock.addEventListener('click', spock_handler)
    playerScore.textContent = 'You: '
    computerScore.textContent = 'Computer: '
    results.textContent = ''

}

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]
    let random_index = Math.floor(Math.random() * choices.length)
    return choices[random_index]
}

function formartResults(firstChoice, secondChoice) {
    let first = firstChoice.toLowerCase()
    let second = secondChoice.toLowerCase()
    const lookupTable = {
      rock: {
        scissors: "crushes",
        lizard: "smashes",
      },
      paper: {
        rock: "covers",
        spock: "disproves",
      },
      scissors: {
        paper: "cuts",
        lizard: "decapitates",
      },
      lizard: {
        spock: "poisons",
        paper: "eats",
      },
      spock: {
        rock: "vaporizes",
        scissors: "smashes",
      },
    };
    const result = lookupTable[first][second];
    return `${firstChoice} ${result} ${secondChoice}`
}

const rules = {
    Rock: ['Scissors', 'Lizard'],
    Paper: ['Rock', 'Spock'],
    Scissors: ['Paper', 'Lizard'],
    Lizard: ['Paper', 'Spock'],
    Spock: ['Rock', 'Scissors']
  }

function checkChoices(player, computer) {
    if (player == computer) return 'tie'

    if (rules[player].includes(computer)) return 'win'
    if (rules[computer].includes(player)) return 'loose'
}

function calcResults(playerChoice) {
    
    let computerChoice = getComputerChoice()
    console.log(playerChoice,computerChoice)
    let playResults = checkChoices(playerChoice, computerChoice)
    if (playResults == 'win'){
        results.textContent = `You win! ` + formartResults(playerChoice,computerChoice)
        player_score ++
        playerScore.textContent = "You: "+ player_score
    }
    else if (playResults == 'loose'){
        results.textContent = "You loose! " + formartResults(computerChoice, playerChoice)
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
        lizard_remover()
        spock_remover()
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
const lizard_handler = function() {calcResults('Lizard')}
const spock_handler = function() {calcResults('Spock')}
const rock_remover = function() {rock.removeEventListener('click', rock_handler)};
const paper_remover = function() {paper.removeEventListener('click', paper_handler)}
const scissors_remover = function() {scissors.removeEventListener('click', scissors_handler)}
const lizard_remover = function() {lizard.removeEventListener('click', lizard_handler)}
const spock_remover = function() {spock.removeEventListener('click', lizard_handler)}

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const lizard = document.querySelector('.lizard')
const spock = document.querySelector('.spock')
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
