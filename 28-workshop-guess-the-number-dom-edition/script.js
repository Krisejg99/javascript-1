/**
 * Guess the number
 *
 * Skriv om ”gissa talet” till att ta emot och visa utfall i DOM. Använd
 * formulär-fält för att ta emot input från användaren, och när formuläret
 * skickas (submits) så jämför det gissade talet mot svaret och visa utfallet
 * i DOM istället för alert()-rutor.
 *
 * STEG 1
 * En input-box där man kan gissa på ett tal. En knapp för att gissa.
 *
 * STEG 1.1
 * Visa resultatet i en alert.
 *
 * STEG 1.2
 * Visa om resultatet var rätt eller inte i ett HTML-element.
 *
 * STEG 2
 * Visa antalet gissningar hittills i ett HTML-element.
 *
 * STEG 3
 * Visa om det gissade talet var för högt eller lågt i ett HTML-element.
 *
 * STEG 4
 * Skapa en knapp för att starta om spelet (ett nytt tal ska slumpas fram och
 * antalet gissningar ska nollställas).
 *
 */

// const cheatEl = document.querySelector('#cheat');
const formGuessEl = document.querySelector('#formGuess');
const inputGuessEl = document.querySelector('#inputGuess');
const resultEl = document.querySelector('#result');
const attemptsEl = document.querySelector('#attempts');
const highscoreEl = document.querySelector('#highscore');

// Get a random number between 1-10
const getRandomNumber = (max = 10) => Math.ceil(Math.random() * max);
// Update highscore in html
const updateHighscore = () => {
    highscore = attempts;
    highscoreEl.textContent = `Highscore: ${highscore}`;
};
// Reset values for a new game
const resetForm = () => {
    attempts = 0;
    inputGuessEl.value = '';
    resultEl.textContent = '';
    attemptsEl.textContent = '';
    formGuessEl.submit.disabled = false;
};

let answer = getRandomNumber();
let attempts = 0;
let highscore = false;

// cheatEl.textContent = answer;

formGuessEl.addEventListener('submit', e => {
    e.preventDefault();

    let guess = Number(inputGuessEl.value);
    let resultText;

    // only if a number is entered
    if (guess) {
        attempts++;
        attemptsEl.textContent = `Attempts: ${attempts}`;

        if (guess === answer) {
            resultText = 'Correct!';
            formGuessEl.submit.disabled = true;

            if (highscore) {
                if (attempts < highscore) {
                    updateHighscore();
                }
            }
            else {
                updateHighscore();
            }
        }
        else if (guess > answer) {
            resultText = 'TOO BIG!';
        }
        else if (guess < answer) {
            resultText = 'too small';
        }

        resultEl.textContent = resultText;
    }
});

formGuessEl.addEventListener('reset', e => {
    answer = getRandomNumber();
    // cheatEl.textContent = answer;
    resetForm();
});

formGuessEl.giveUp.addEventListener('click', e => {
    formGuessEl.submit.disabled = true;
    resultEl.textContent = `Answer was: ${answer}\nGoodbye.`;
});