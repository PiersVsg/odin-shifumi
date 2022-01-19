let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

function computerPlay() {
    let choices = ['Pierre', 'Papier', 'Ciseaux']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if ((playerSelection == 'Pierre' && computerSelection == 'Ciseaux') ||
        (playerSelection == 'Ciseaux' && computerSelection == 'Papier') ||
        (playerSelection == 'Papier' && computerSelection == 'Pierre')) {
        
        playerScore += 1
        result = ('Tu as gagné ! ' + playerSelection + ' l\'emporte sur ' + computerSelection
            + "<br><br>Moi: " + playerScore + "<br>Ordinateur: " + computerScore)

        if (playerScore == 5) {
            result += '<br><br>Tu as gagné ! Raffraichis la page pour jouer à nouveau !'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('Match nul. Vous avez tous les deux choisi ' + playerSelection
            + "<br><br>Moi: " + playerScore + "<br>Ordinateur: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('Tu as perdu ! ' + computerSelection + ' l\'emporte sur ' + playerSelection
            + "<br><br>Moi: " + playerScore + "<br>Ordinateur: " + computerScore)

        if (computerScore == 5) {
            result += '<br><br>Tu as perdu ! Raffraichis la page pour jouer à nouveau !'
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result
    return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})