/**
 * Clock 🕰️
 *
 */

const clock = document.querySelector('#clock');
const date = document.querySelector('#date');

const clockId = setInterval( () => {
    const now = new Date();
    clock.innerText = now.toLocaleTimeString();

    // if (now.getDay() === 5 && now.getHours() >= 15) {
	// 	clock.innerText += ' 🥳';
	// };

    date.innerText = now.toLocaleDateString();

    // console.log(date.innetText = now.toLocaleDateString());
}, 500);
