let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10);
const compareGuesses = (userGuess, pcGuess, target) =>
    !(Math.abs(target - pcGuess) < Math.abs(target - userGuess));
const updateScore = (id) => id === 'human' ? humanScore++ : computerScore++;
const advanceRound = () => currentRoundNumber++;