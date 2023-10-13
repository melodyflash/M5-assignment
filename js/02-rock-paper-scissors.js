// User choice prompt and validation
let userChoice
while (true){
    userChoice = prompt("Rock, paper, or scissors?").toLowerCase()
    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors'){
        break
    } else {
        userChoice = alert("Enter a valid entry")
    }
}
// Computer's choice randomized and translation
function compChoice() {
    return Math.floor(Math.random() * 3)
}

compChoice = compChoice()

if (compChoice == 0){
    compChoice = 'rock';
} else if (compChoice == 1){
    compChoice = 'paper';
} else if(compChoice == 2){
    compChoice = 'scissors';
}

document.write(`Computer chose: ${compChoice} </br>`)
document.write(`User chose: ${userChoice} </br>`)

// compare comp choice and user choice to determine winner

function determineWinner(compChoice, userChoice){
    if (compChoice === 'rock' && userChoice === 'rock'){
        return winnerIs = 'tie'
    } else if (compChoice === 'rock' && userChoice === 'paper'){
        return winnerIs = 'User wins!'
    } else if (compChoice === 'rock' && userChoice === 'scissors'){
        return winnerIs = 'Computer wins!'
    } else if (compChoice === 'scissors' && userChoice === 'rock'){
        return winnerIs = 'User wins!'
    } else if (compChoice === 'scissors' && userChoice === 'paper'){
        return winnerIs = 'Computer wins!'
    } else if (compChoice === 'scissors' && userChoice === 'scissors'){
        return winnerIs = 'tie'
    } else if (compChoice === 'paper' && userChoice === 'rock'){
        return winnerIs = 'Computer wins!'
    } else if (compChoice === 'paper' && userChoice === 'scissors'){
        return winnerIs = 'User wins!'
    } else if (compChoice === 'paper' && userChoice === 'paper'){
        return winnerIs = 'tie'
    }
}

determineWinner(compChoice, userChoice)
document.write(`<h1>${winnerIs}</h1>`)
alert(winnerIs)