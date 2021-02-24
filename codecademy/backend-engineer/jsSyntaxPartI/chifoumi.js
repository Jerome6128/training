const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    return (userInput === 'rock' || userInput === 'paper'|| userInput === 'scissors' || userInput === 'bomb') ? userInput : 'invalid choice';
  }

const getComputerChoice = () => {
    let computerChoice;
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
  }
  return computerChoice;
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie' ;
    } else if (userChoice === 'bomb') {
        return 'You win';
    }
    if (userChoice === 'rock' ) {
        return computerChoice === 'paper' ? 'Computer wins' : 'You win';
    } else if (userChoice === 'paper') {
        return computerChoice === 'scissors' ? 'Computer wins' : 'You win';
    } else if (userChoice === 'scissors') {
        return computerChoice === 'rock' ? 'Computer wins' : 'You win';
    }
}
const playGame = (item) => {
    console.log('');
    console.log('New game');
    const userChoice = getUserChoice(item);
    console.log(`Userchoice: ${userChoice}`);
    const computerChoice = getComputerChoice();
    console.log(`Computerchoice: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame('rock');
playGame('paper');
playGame('scissors');
playGame('bomb');