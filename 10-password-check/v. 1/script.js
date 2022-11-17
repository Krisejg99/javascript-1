/**
 * Workshop: Password Checker
 *
 * Skriv kod som kollar att lösenordet i variabeln password har
 * - minst 6 tecken varav minst två specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 */

let password;
 password = "password"; // inte giltigt
// password = "pa$sword"; // giltigt
// password = "p@ssw%rd"; // giltigt
// password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
// password = "such-password-much-secure-very-long"; // giltigt
 
const specialChars = [
    "@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

 


// WE BEGIN HERE

let specialCharsCounter = 0;

for (i = 0; i < password.length; i++) {
     console.log(password[i]);
    if (specialChars.includes(password[i])) {
        specialCharsCounter++;
    }     
}

console.log(specialCharsCounter);

if (password.length >= 16) {
    console.log("This password is 16 or more characters!");
} else if (password.length >= 12 && password.includes("-")) {
    console.log("This password is at least 12 characters with at least 1 dash '-'");
} else if (password.length >= 8 && specialCharsCounter) {
    console.log("This password is at least 8 characters with at least 1 special character!");
} else if (password.length >= 6 && specialCharsCounter >= 2) {
    console.log("This password is at least 6 characters with at least 2 special character!");
} else {
    console.log("Not a good enough password, try again.");
}