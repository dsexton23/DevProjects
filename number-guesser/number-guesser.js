let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget(){
  let secretTarget = Math.floor(Math.random() * 10);
  return secretTarget;
}

const compareGuesses = (userGuess, computerGuess, secretTarget){
  const userDiff = Math.abs(userGuess - secretTarget);
  const computerDiff = Math.abs(computerGuess - secretTarget);
  if(userDiff <= computerDiff){
    return true;
  }else if (userDiff > computerDiff){
    return false;
  }
}

const updateScore = winner =>{
  if(winner === 'human'){
    humanScore += ;
  }else if(winner ==='computer'){
    computerScore += ;
  }
}