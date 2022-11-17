/**
 * Workshop: Password Checker with functions
 *
 * STEG 1
 * Istället för att vi har lösenordet hårdkodat (dvs vi testar samma lösenord
 * alltid), fråga användaren efter ett lösenord och berätta därefter om det
 * är ett säkert lösenord eller ej.
 *
 * STEG 2
 * Lägg koden för att hitta antalet specialtecken i en egen funktion som tar
 * emot lösenordet att kontrollera som en parameter, och returnerar antalet
 * specialtecken som hittades i det mottagna lösenordet.
 *
 * Byt ut specialCharCount i if-satserna till att kalla på din nya funktion
 * och kolla att allt fortfarande fungerar.
 *
 * STEG 3
 * Berätta för användaren om lösenordet var säkert eller ej med hjälp av
 * `alert` istället för `console.log`
 *
 *
 * GAMMAL KRAVSPECIFIKATION
 * Skriv kod som kollar att lösenordet i variabeln password har
 * - minst 6 tecken varav minst två (olika) specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 */

// let password;
// // password = "password"; // inte giltigt
// // password = "p@$swo"; // giltigt
// // password = "pa$sword"; // giltigt
// password = "p@ssw%rd"; // giltigt
// // password = "pa$$word"; // giltigt
// // password = "secretpassword"; // inte giltigt
// // password = "secret-password"; // giltigt
// // password = "such-password-much-secure-very-long"; // giltigt

const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

let password = prompt("Type your password here:");

const countSpecialChars = (pwd) => {
	let specialCharsCounter = 0;

	for (i = 0; i < pwd.length; i++) {
		console.log(pwd[i]);
	   if (specialChars.includes(pwd[i])) {
		   specialCharsCounter++;
	   }
	}

	return specialCharsCounter;
}

const nbrOfSpecialChars = countSpecialChars(password);

// console.log(`The password has ${specialCharsCounter} special characters`);

if (password.length >= 16) {
   alert("This password is 16 or more characters!");
}
else if (password.length >= 12 && password.includes("-")) {
   alert("This password is at least 12 characters with at least 1 dash '-'");
}
else if (password.length >= 8 && nbrOfSpecialChars) {
   alert("This password is at least 8 characters with at least 1 special character!");
}
else if (password.length >= 6 && nbrOfSpecialChars >= 2) {
   alert("This password is at least 6 characters with at least 2 special character!");
}
else {
   alert("Not a good enough password, try again.");
}
