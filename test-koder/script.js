// // loop array with empty string
// let username = ["", "Void", "Lina", "Axe"];
// let msg = "Welcome";

// for (i = 0; i < username.length; i++) {
//     if (!username[i]) {
//         console.log(msg, "Anonymous!");
//     }
//     else {
//         console.log(msg, username[i]);
//     }
// }





// // different way of doing the above
// let username = ["", "Void", "Lina", "Axe"];

// for (i = 0; i < username.length; i++) {

//     let msg = `Welcome ${username[i]}`;

//     if (!username[i]) {
//         msg = "Welcome Anonymous!";
//         console.log(msg);
//     }
//     else {
//         console.log(msg);
//     }
// }





// // default parameters in function + multiple parameters and arguments sent in
// const greetUser = function(username = "Anonymous", timeOfDay = "day") {
//     console.log(`Good ${timeOfDay} ${username}`);
// }

// greetUser();
// greetUser("Krise");
// greetUser("evening");
// greetUser("Whicks", "morning");





// // simple equasions with function
// const calcBoxCircumference = function(width, height) {

// 	const circumference = width * 2 + height * 2;

// 	console.log(circumference);
//     return circumference;
// }

// const BoxCircumference = calcBoxCircumference(0, 40);
// console.log(BoxCircumference);





// // Callback function
// const log = function(txt) {
// 	console.log(txt);
// }

// const makeMoreInteresting = function(txt, callback) {
// 	let interesting = txt + "!!!!!!!!!!!!!!";
// 	callback(interesting);
// }

// makeMoreInteresting("This is so much fun", log);





// // forEach(), arrow function through an array with 2 parameters
// let students = ["Johan", "Pelle", "Kajsa", "Maja", "Kajan"];

// students.forEach( (item, index) => {
// 	console.log(`Student at index ${index} is: ${item}`);
// } );





// // function, 2 arguments
// let myFunction = (x, y) => {
// 	console.log(`jag säger ${x}, säger du ${y}`);
// }

// myFunction("hej", "då");





// // random number generator
// let randomNumber = Math.ceil(Math.random() * 10);

// console.log(randomNumber);
