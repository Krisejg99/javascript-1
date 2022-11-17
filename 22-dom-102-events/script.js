/**
 * DOM 102 + events
 *
 */

const btnAdd = document.querySelector('#add');

btnAdd.addEventListener('click', (e) => {

	// console.log("oh, nice", e.target);

	const liCount = document.querySelectorAll('li').length;

	document.querySelector('ul').innerHTML += `<li>list item ${liCount + 1}</li>`;

	// const newLiEl = document.createElement('li');
	// newLiEl.innerText = 'New List Item';

	// document.querySelector('ul').append(newLiEl);
});

//
document.querySelector('ul').addEventListener('click', (e) => {
	// console.log("hello, i am Saman, you clicked me", e);

	if (e.target.tagName === "LI") {
		e.target.classList.toggle('completed');
	}
});