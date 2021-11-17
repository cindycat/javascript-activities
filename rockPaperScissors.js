const getUserChoice = userInput => {
  userInput = userInput.toLowerCase(); 
  if( userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
  }
  else{
    return 'Invalid input, please try again.';
  }
};

//console.log(getUserChoice('scis'));

//console.log(getUserChoice('rock'));

const getComputerChoice = () =>{
 randomNumber = Math.floor(Math.random() *3);
  if(randomNumber === 0){
      return 'rock';
  }
  else if(randomNumber === 1){
      return 'paper';
  }
  else if(randomNumber === 2){
      return 'scissors';
  }
};

/*
console.log(getComputerChoice());
console.log(getUserChoice('pie'));
*/


const determineWinner = (userChoice,computerChoice) =>{
  if ( userChoice === computerChoice){
    return 'tie';
    }

  if( userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'The computer won!';
      }else{
        return 'The user won!';
      }
  }  
  if( userChoice === 'paper'){
      if( computerChoice === 'scissors'){
          return 'The computer won!';
      }else{
          return 'The user won!';
      }
  }
  if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
          return 'The computer won!';
      }else{
          return 'The user won!';
      }
  }
};

/*console.log(determineWinner('rock','scissors'));
console.log(determineWinner('scissors','rock'));
console.log(determineWinner('rock','rock'));
*/

const playGame = () => {
 
  const userChoice = getUserChoice('Paper');
  const computerChoice = getComputerChoice();
  console.log('You chose ' + userChoice);
  console.log('The computer chose ' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice)); 
};


playGame();
