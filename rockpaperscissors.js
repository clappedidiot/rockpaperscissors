
// generate computer choice
const getComputerChoice = () => {
    const rps = ['rock', 'paper', 'scissors'];
    const num = Math.floor(Math.random() * 3);
    return rps[num];
};

// set scores
let playerScore = 0;
let pcScore = 0;

// play one game function with possible outcomes
function play(playerChoice,computerChoice) {
    if (playerChoice == 'rock' && computerChoice == 'rock') {
        return 'It\'s a tie!';
    } else if (playerChoice == 'paper' && computerChoice == 'paper') {
        return 'It\'s a tie!';
    } else if (playerChoice == 'scissors' && computerChoice == 'scissors') {
        return 'It\'s a tie!';
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        pcScore++;
        return 'Paper beats rock, you lose.';
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        playerScore++;
        return 'Rock beats scissors, you win!';
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        pcScore++;
        return 'Scissors beats paper, you lose.'
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        playerScore++;
        return 'paper beats rock, you win!';
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        playerScore++;
        return 'Scissors beats paper, you win!';
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        pcScore++;
        return 'Rock beats scissors, you lose.';
    };
};

// play the game 5 times
const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt('Rock, Paper or Scissors?','Pick one').toLowerCase();
        const computerChoice = getComputerChoice();
        console.log(play(playerChoice,computerChoice));
     }
     console.log(`The game finished ${playerScore} : ${pcScore}.`);
    }
game();