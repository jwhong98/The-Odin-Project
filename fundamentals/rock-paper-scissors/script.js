const results = document.createElement('div');
const body = document.querySelector('body');
body.appendChild(results);

let computerScore = 0;
let playerScore = 0;

const computerPlay = () => {
    const moves = ['rock', 'paper', 'scissors'];
    const move = moves[Math.floor(Math.random() * moves.length)];
    return move;
}

const playRound = (playerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = computerPlay();
    const winMessage = `You win! ${playerSelection} beats ${computerSelection}!`;
    const loseMessage = `You lose! ${computerSelection} beats ${playerSelection}!`
    const result = document.createElement('p');
    
    if (playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            computerScore++
            result.textContent = loseMessage;
            
        } else if(computerSelection === 'scissors') {
            playerScore++
            result.textContent = winMessage
            
        } else {
            result.textContent = 'Draw'
        }
    }
    if (playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
            result.textContent = loseMessage;
            computerScore++
        } else if(computerSelection === 'rock') {
            result.textContent = winMessage;
            playerScore++
        } else {
            result.textContent = 'Draw'
            
        }
        
    }
    if (playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            result.textContent = loseMessage;
            computerScore++
        } else if(computerSelection === 'paper') {
            result.textContent = winMessage;
            playerScore++
        } else {
            result.textContent = 'Draw'
            
        }
        
    }
    const scores = ` Computer: ${computerScore}, Player: ${playerScore}`
    result.append(scores)
    result.append(checkWinner(playerScore, computerScore))
    results.appendChild(result);
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(e.target.textContent)
    })
})

const checkWinner = (pScore, cScore) => {
    let winner = '';
    if((pScore || cScore) === 5) {
        winner = pScore > cScore ? ' Player Wins!' : ' Computer Wins!'
    } 
    return winner
}

// const game = () => {
//     const rounds = 5;
//     let playerScore = 0;
//     let computerScore = 0;
//     for(let i = 0; i < rounds; i++) {
//         const playerSelection = prompt('Enter your move: ');
//         const computerSelection = computerPlay();
//         const winner = playRound(playerSelection, computerSelection);
//         if(winner === 'computer'){
//             computerScore++;
//         } else if (winner === 'player'){
//             playerScore++;
//         } else {
//             return;
//         }
//     }
//     const winner = playerScore > computerScore ? 'Player' : 'Computer'
//     console.log(`Computer score: ${computerScore}, Player score: ${playerScore}`);
//     console.log(`${winner} wins!`);
// }

// game();