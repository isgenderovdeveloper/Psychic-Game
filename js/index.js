var winParagraph = document.querySelector(".win");
var loseParagraph = document.querySelector(".lose");
var guessParagraph = document.querySelector(".guess");
var myGuessParagraph = document.querySelector(".myGuess");

var lettersArray = ["a", "c", "e", "g", "l"];
var guessArray = [];
var winCounter = 0;
var loseCounter = 0;
var myGuessCounter = 9;
var randomLetter = randomLetterFunc(lettersArray);

function randomLetterFunc(arr) {
    var randomIndex = Math.floor(Math.random() * lettersArray.length);
    return arr[randomIndex];
}

function mySupposition(e) {
    var myLetter = e.key;

    console.log(myLetter);
    console.log(randomLetter);

    guessArray.push(myLetter);
    console.log(guessArray);

    myGuessParagraph.innerHTML = `Your Guesses so far:${guessArray}`;
    console.log(myGuessParagraph);

    if (myLetter == randomLetter) {
        myGuessCounter = 9;
        winCounter++;
        randomLetter = randomLetterFunc(lettersArray);
        guessArray = [];
        guessParagraph.innerHTML = `Guesses Left:${9}`;
        winParagraph.innerHTML = `Wins: ${winCounter}`;
        myGuessParagraph.innerHTML = `Your Guesses so far:${guessArray}`;
    } else if (myGuessCounter > 0 && myLetter !== randomLetter) {
        myGuessCounter--;
        guessParagraph.innerHTML = `Guesses Left:${myGuessCounter}`;
    } else {
        myGuessCounter = 10;
        loseCounter++;
        myGuessCounter--;
        randomLetter = randomLetterFunc(lettersArray);
        guessArray = [];

        guessParagraph.innerHTML = `Guesses Left:${myGuessCounter}`;
        loseParagraph.innerHTML = `Loses: ${loseCounter}`;
        myGuessParagraph.innerHTML = `Your Guesses so far:${guessArray}`;
    }
}

window.onkeydown = mySupposition;