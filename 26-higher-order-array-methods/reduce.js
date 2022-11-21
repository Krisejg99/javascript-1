/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map()
 * .reduce() <--
 *
 * - Clone an array
 * - Shuffle an array
 */



// /**
//  * Numbers
//  */

// const simpleNumbers = [ 3, 7, 13, 19];
// console.log(simpleNumbers);

// // old way 🤮
// let sum = 0;

// simpleNumbers.forEach(num => {
//     sum += num;
// });
// console.log("The sum of all the numbers is:", sum);



// // new way 😎
// const evenSimplerNumbers = simpleNumbers.reduce((sum, num) => {
//     console.log(`Sum is ${sum}, add num ${num}`);
//     return sum + num;
// }, 1295);
// console.log(evenSimplerNumbers)






// /**
//  * Students
//  */
//  const students = [
// 	{
// 		name: "Johan",
// 		points: 13,
// 	},
// 	{
// 		name: "Peter",
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

// const totalPoints = students.reduce((sum, student) => {
//     return sum + student.points;
// }, 0);

// console.log(totalPoints);





// const products = [
//     {
//         sku: "CORR-BWL",
//         name: "Corrosive bowl",
//         in_stock: 321,
//         price: 0.99,
//     },
//     {
//         sku: "CTN-SPCE",
//         name: "Cotton spice rack",
//         in_stock: 2,
//         price: 149.99,
//     },
//     {
//         sku: "GOOD-COOKIES",
//         name: "Inside-out Oreo cookies",
//         in_stock: 18,
//         price: 2.49,
//     },
//     {
//         sku: "BACK-BREAKER",
//         name: "The uncomfortable broom",
//         in_stock: 1,
//         price: 28.65,
//     },
// ];

// const totalValue = products.reduce((sum, product) => {
//     return sum + product.price * product.in_stock;
// }, 0);

// console.log(totalValue);





const friends = [
    { name: "John", grade: 2, year: 3, sex: "M" },
    { name: "Sarah", grade: 3, year: 2, sex: "F" },
    { name: "Bob", grade: 3, year: 5, sex: "M" },
    { name: "Johnny", grade: 2, year: 2, sex: "M" },
    { name: "Ethan", grade: 4, year: 1, sex: "M" },
    { name: "Paula", grade: 4, year: 5, sex: "F" },
    { name: "Donald", grade: 5, year: 5, sex: "M" },
    { name: "Jennifer", grade: 3, year: 3, sex: "F" },
    { name: "Courtney", grade: 3, year: 1, sex: "F" },
    { name: "Jane", grade: 4, year: 3, sex: "F " },
];

// calculate average grade for all friends
const averageGrade = friends
    .reduce((sum, friend) => sum + friend.grade, 0)
    / friends.length;

console.log(averageGrade);



// calculate average grade for all girls
const femaleFriends = friends.filter(friend => friend.sex === "F");

const averageFemaleGrade = femaleFriends
    .reduce((sum, friend) => sum + friend.grade, 0)
    / femaleFriends.length;

console.log(averageFemaleGrade);