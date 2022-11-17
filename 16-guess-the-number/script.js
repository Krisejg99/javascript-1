/**
 * Guess the number
 *
 * STEG 1
 * Sätt ett tal i en variabel.
 * Be användaren att gissa talet med hjälp av `prompt()`.
 * Om användarens gissning är fel, fråga efter en ny gissning.
 * Om användarens gissning är rätt, visa en alert med ett grattis-meddelande.
 * Om användaren skriver in talet 0 så ska spelet avslutas.
 *
 * STEG 1.5
 * Berätta för användaren om gissningen är för låg eller för hög. Naturligtvis
 * ska de få gissa igen efter detta.
 *
 * STEG 2
 * Slumpa talet som användaren ska gissa, så att de inte gissar rätt varje gång.
 *
 * STEG 3
 * Spara ner hur många gissningar som krävdes. Visa antalet gissningar när
 * användaren gissat rätt.
 *
 * EXTRA OM MAN VILL:
 * 
 * STEG 4
 * Efter att man gissat rätt så slumpa fram ett nytt tal och starta om spelet
 * på nytt.
 * Spara en "highscore", dvs hur få gånger som krävts för att gissa rätt.
 * Om användaren gissar rätt på fler gånger, visa "Tyvärr du gissade rätt på
 * ${tries} antal försök men din highscore är ${highscore}".
 * Om användaren gissar rätt på färre gånger, visa "YAY NEW HIGHSCORE! ${highscore}"
 *
 */



// let answer = prompt("Guess a number from 1 to 10");
// console.log("Your guess:", answer);

// function for getting a random number from 1 to 10
const getRandomNumber = (max = 10) => {
	return Math.ceil(Math.random() * max);
}

let exitGame = false;
let highscore = false;

// while (exidGame === false)
while (!exitGame) {

    let answer = getRandomNumber();
    let continueGame = true;
    let attempts = 0;

    while (continueGame) {
        // Ask the user for a guess
        let guess = Number(prompt(`Guess a number from 1 - 10\nAttempt: ${attempts + 1}`));
        
        if (guess === answer) {
            // Correct
            attempts++;

            // Check if there is an existing highscore
            if (highscore) {
                // new highscore?
                if (attempts < highscore) {
                    highscore = attempts;
                    console.log(`Highscore: ${highscore}`);
                }
                else {
                    console.log(`Sorry, no new highscore. Your current highscore is ${highscore}`);
                }
            }
            else {
                highscore = attempts;
                console.log(`Highscore: ${highscore}`);
            }

            alert(`Congrats, you won! It took you ${attempts} attempt(s)`);
            attempts = 0;
            continueGame = false;
        }
        else if (guess === 0) {
            // Quit
            alert("You've decided to quit, goodbye.");
            continueGame = false;
            exitGame = true;
        }
        else if (guess > answer) {
            // Too high
            attempts++;
            alert("TOO BIG.");
        }
        else if (guess < answer) {
            // Too low
            attempts++;
            alert("too small");
        }
        else {
            // Other guesses
            alert("That's not a number...");
        }
    }
}
