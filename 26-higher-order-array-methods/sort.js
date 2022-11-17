/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map()
 * .reduce()
 *
 * - Clone an array
 * - Shuffle an array
 */

// // names array
// const names = ["Johan", "Fredrik", "Saman", "Alicia", "Maja", "Elliot"];
// console.log('Names in chaos:', names);

// names.sort().reverse(); // destructive methods, ändrar names, behöver inte spara det som en ny variabel
// console.log('Names in order and reversed:', names)



// // numbers array
// const numbers = [10, 1337, 1, 69, 500, 33, -5, -99];
// console.log('Numbers in chaos:', numbers)

// numbers.sort();
// console.log('Numbers in order with first characters value (reads as string).', numbers)

// // Den tar alla tal i arrayn och jämför med varandra, ex, a = 10 och b = 1337.
// numbers.sort((a, b) => {
//     // Sen kollar den om svaret är negativt eller positivt genom att ta a - b.
//     // Om det är positivt så lägger den b före a, om det är negativt lägger den a före b.
//     return a - b;
//     // return b - a; // returnerar den i reverse order
// });

// // // kan ocksp skriva så här:
// // numbers.sort((a, b) => a - b);

// console.log(numbers);


// // sorting objects in arrays
// const students = [
// 	{
// 		name: "Johan",
// 		points: 1337,
// 	},
// 	{
// 		name: "Saman",
// 		points: 3,
// 	},
// 	{
// 		name: "Alicia",
// 		points: 42,
// 	},
// 	{
// 		name: "Elliot",
// 		points: 88,
// 	},
// 	{
// 		name: "Maja",
// 		points: 35,
// 	},
// ];

// // sorting in order of points
// students.sort((a, b) => {
//     return a.points - b.points;
// });
// console.log(students);



// // sorting in order of names
// students.sort((a, b) => {
//     // toUpperCase() är non destructive method, så vi ändrar tillfälligt allt till CAPS så alla jämförs lika
//     if (a.name.toUpperCase() < b.name.toUpperCase()) {
//         return -1
//     }
//     if (a.name.toUpperCase() > b.name.toUpperCase()) {
//         return 1
//     }
//     return 0;
// });
// console.log(students);


// // .filter() creats a new array with the values that are correct
// const numbers = [10, 1337, 1, 69, 500, 33, -5, -99];

// console.log('Original numbers:', numbers);

// const bigNumbers = [];
// numbers.forEach(num => {
// 	if (num >= 25) {
// 		bigNumbers.push(num);
// 	}
// });
// console.log('bigNumbers:', bigNumbers);



// // Samma resultat som ovan
// const numbers = [10, 1337, 1, 69, 500, 33, -5, -99];

// const largeNumbers = numbers.filter(num => {
//     // if (num >= 25) {
//     //     return true;
//     // }
//     // else {
//     //     return false;
//     // }
//     return (num >= 25); // det blir true eller false
// });
// console.log('largeNumbers:', largeNumbers);



// // Kan även skrivas på en ran:
// const numbers = [10, 1337, 1, 69, 500, 33, -5, -99];

// const largeNumbers = numbers.filter(num => num >= 25);
// console.log('largeNumbers:', largeNumbers);



// // .find() hittar det första värdet som stämmer
// const numbers = [10, 500, 1, 69, 1337, 33, -5, -99];

// const firstLargeNumber = numbers.find(num => num >= 25);
// console.log('First number >= 25 is:', firstLargeNumber);



const students = [
	{
		name: "Johan",
		points: 13,
	},
	{
		name: "Saman",
		points: 3,
	},
	{
		name: "Alicia",
		points: 42,
	},
	{
		name: "Elliot",
		points: 88,
	},
	{
		name: "Maja",
		points: 35,
	},
];
// First student in the array with points >= 40
const firstPassedStudent = students.find(student => student.points >= 40);
console.log(`First person to pass: ${firstPassedStudent.name} with ${firstPassedStudent.points} points`);



// .map()
const numbers = [10, 1337, 1, 69, 500, 33, -5, -99];