const randomNumber = parseInt(Math.random()*100 + 1);
const submit = document.querySelector('#subt')
const userInput = document.querySelector('.guessField');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultParas');
const startOver = document.querySelector('#wrapper');

const p = document.createElement('p')
//Global scope
let prevGuess = []
let numGuess = 1
let playGame = true // in all game related projects , this variable is always there

if(playGame){
    submit.addEventListener('click', function(e){
         e.preventDefault()
         const guess =parseInt(userInput.value)
         validateGuess(guess)

         })
}

function validateGuess(guess){ 
    // to check if the guess is valid 
    if(isNaN(guess)){
        alert('Please enter a valid number')


    }else if(guess<1){
        alert('Please enter a valid number')

    }else if(guess>100){
        alert('Please enter a valid number')
    } else {
        prevGuess.push(guess) // to push the gues sinto the array we made of previous guess
        if(numGuess=== 10){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()

        }else{
            displayGuess(guess)
            checkGuess(guess)

        }
    }

     
}
function checkGuess(guess){ 
    //to check if the guess is correct
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    } else if(guess < randomNumber){
        displayMessage(`Number is too low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is too high`)
    }




}
function displayGuess(guess){
    userInput.value = ''
    guesses.innerHTML+= `${guess}   `
    //numGuess++;
    lastResult.innerHTML = `${10 - numGuess}`
    numGuess++;

}
function displayMessage(message){
    lowOrHi.innerHTML =`<h2>${message}</h2>`;

}
function endGame(){
    userInput.value =''
    userInput.setAttribute('disabled', '') //to disable the userinput field 
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame"> Start New Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame()

    
}

function newGame(){
    document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        const randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = []
        numGuess=1
        guesses.innerHTML = ''
        lastResult.innerHTML = `${10 - numGuess}`;
        lowOrHi.innerHTML = '';
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true 

    });

}


