const computerPlay = () => {
    const moves = ['rock', 'paper', 'scissors'];
    const move = moves[Math.floor(Math.random() * moves.length)];
    return move;
}

const playRound = (playerSelection, computerSelection) => {
    const winMessage = `You win! ${playerSelection} beats ${computerSelection}`;
    const loseMessage = `You lose! ${computerSelection} beats ${playerSelection}`
    if (playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            console.log(loseMessage);
            return 'computer';
        } else if(computerSelection === 'scissors') {
            console.log(winMessage);
            return 'player';
        }
        return 'Draw'
    }
    if (playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
            console.log(loseMessage);
            return 'computer';
        } else if(computerSelection === 'rock') {
            console.log(winMessage)
            return 'player'
        }
        return 'Draw'
    }
    if (playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            console.log(loseMessage);
            return 'computer';
        } else if(computerSelection === 'paper') {
            console.log(winMessage);
            return 'player'
        }
        return 'Draw'
    }
}

const game = () => {
    const rounds = 5;
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < rounds; i++) {
        const playerSelection = prompt('Enter your move: ');
        const computerSelection = computerPlay();
        const winner = playRound(playerSelection, computerSelection);
        if(winner === 'computer'){
            computerScore++;
        } else if (winner === 'player'){
            playerScore++;
        } else {
            return;
        }
    }
    const winner = playerScore > computerScore ? 'Player' : 'Computer'
    console.log(`Computer score: ${computerScore}, Player score: ${playerScore}`);
    console.log(`${winner} wins!`);
}

game();