// //Game rules
// -Player must guess a number between 1 and 10
// -Player gets a certain amount of guesses
// -Notify player of guesses remaining
// -Notify the player of the correct answer if loose 
// -let player choose to play again 

//Game values

let min = 5, 
    max = 10,
   // winningNum = 7, //It can be made dynamic with a function call getRandomNum 
   winningNum = getRandomNum(min, max), 
    guessesLeft = 3;

//later we will create a dynamic function to generate different winning 
//numbers

//UI Elements 
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message')


//Play Again event listeners 
game.addEventListener('mousedown', function(e) {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
})

//Assign UI min and max

minNum.textContent =min;
maxNum.textContent = max;

//Listen for guess 

guessBtn.addEventListener('click', function() {
 let guess = parseInt(guessInput.value);

 //Validate our input 
 if(isNaN(guess) || guess < min || guess > max){
  setMessage(`Please enter a number between ${min} and ${max}`, 'red');

 }

//Check if won
if(guess === winningNum) {
//Game over won 

 gameOver(true, `${winningNum} is correct, You Win!`);
// //Disabled input 
// guessInput.disabled = true; 
// //Change border color to show that they won
// guessInput.style.borderColor = 'green';
// //Set message to let them know they won
// setMessage(`${winningNum} is correct, You Win!`, 'green');

} else {
 //Wrong number 
 guessesLeft -= 1; 

 if(guessesLeft === 0) {
     //Game is over  - lost 

     gameOver(true,`oops, You Lost buddy! The correct number was ${winningNum}`);
    //  //Disabled input 
    // guessInput.disabled = true; 
    // //Change color to show that they won
    // guessInput.style.borderColor = 'green';
    // //Set message to let them know they won
    // setMessage(`oops, You Lost buddy! The correct number was ${winningNum}`, 'red');
 } else {
    //Game continues -answer wrong

    //Change border color here too
    guessInput.style.borderColor = 'red';

    //Clear input 
    guessInput.value = ''; 

    //Tell user its the wrong number 
    setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')

 }

}

});

//Game over 
function gameOver(won, msg){
 let color;
 won === true ? color = 'green' : color = 'red'; 
    //Disabled input 
guessInput.disabled = true; 
//Change border color to show that they won
guessInput.style.borderColor = 'green';
//Change text color
message.style.color = color; 
//Set message to let them know they won
setMessage(msg);

//Play Again- Classes for our Play again event (see above event listeners)
guessBtn.value = 'Play Again';
guessBtn.className += 'play-again';

}

//Get Winning Number function 
function getRandomNum(min, max) {
 return (Math.floor(Math.random()*(max-min+1)+min));
}



//Set message 
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg; 
}


