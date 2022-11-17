/**
 * Todos
 *
 * STEG 1
 * Loopa över todos och för varje todo, skriv ut en
 * `<li class="list-group-item">` till #todos med titeln på todo:n.
 *
 * STEG 2
 * Koppla ihop formuläret så att det skapas en nytt TODO-objekt som
 * stoppas in i `todos`-array:en när formuläret submit:as.
 * Glöm inte rendera ut den uppdaterade listan till DOM!
 *
 * STEG 3
 * När man klickar på en todo, hitta todo:n som klicket skedde på,
 * leta upp todo-objektet och ändra `completed` till `true`.
 * Glöm inte rendera ut den uppdaterade listan till DOM!
 *
 */

// get references to DOM elements
const todosEl = document.querySelector('#todos');
const newTodoFormEl = document.querySelector('#new-todo-form');

// list of todos
const todos = [
	{
		title: "Learn basic JavaScript",
		completed: true,
	},
	{
		title: "Learn DOM",
		completed: false,
	},
	{
		title: "Take over the world",
		completed: false,
	},
];

const reloadList = () => {
    
    todosEl.innerHTML = '';

    // loop through array and add all objects to site
    todos.forEach(todo => {
        if (todo.completed) {
            // add new <li> with todo.title and class completed
            todosEl.innerHTML += `<li class="list-group-item completed">${todo.title}</li>`;
        }
        else {
            // adds new <li> with todo.title
            todosEl.innerHTML += `<li class="list-group-item">${todo.title}</li>`;
        }
    });
};

// eventListener when submitting
newTodoFormEl.addEventListener('submit', e => {
    e.preventDefault();

    // only do if there is value in input field
    if (newTodoFormEl.newTodo.value) {

        // push value from form into the todos array
        todos.push({
            title: newTodoFormEl.newTodo.value,
            completed: false,
        });
    };

    // call function on every submit at the end to reload the new info
    reloadList();

    newTodoFormEl.newTodo.value = '';
});

// calling function before anything else to reset all html in the <ul>
reloadList();




// click event on UL
todosEl.addEventListener('click', (e) => {

    if (e.target.tagName === "LI") {


        const clickedTodo = todos.find(todo => {
            return todo.title === e.target.textContent;
        });

        console.log(clickedTodo)



        clickedTodo.completed = !clickedTodo.completed;
	};

    reloadList();
});