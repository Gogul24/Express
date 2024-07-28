const prompt = require('prompt-sync')({sigint:true});

const numberToguess = Math.floor(Math.random()*10)+1;
let foundCorrectNumber = false;

while(!foundCorrectNumber){
    let guess = prompt('Guess a number form 1 to 10 : ')
    guess = Number(guess)

    if(guess===numberToguess){
        console.log('Congrats , You guessed right');
        foundCorrectNumber = true;
    }
    else{
        console.log('Sorry, You Guessed Wrong Number');
    }
}
