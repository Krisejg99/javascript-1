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
        id: 1,
        title: "Learn basic JavaScript",
        completed: true,
    },
    {
        id: 2,
        title: "Learn DOM",
        completed: false,
    },
    {
        id: 3,
        title: "Take over the world",
        completed: false,
    },
];

const reloadList = () => {

    todosEl.innerHTML = '';

    // loop through array and add all objects to site
    const lis = todos.map(todo => {

        let cssClasses = 'list-group-item';

        if (todo.completed) {
            // add new <li> with todo.title and class completed
            cssClasses += ' completed';
        }
        // adds new <li> with todo.title
        return `
            <li class="${cssClasses}" data-todo-id="${todo.id}">
                ${todo.title}
            </li>
        `;
    });

    todosEl.innerHTML = lis.join('');
};

// eventListener when submitting
newTodoFormEl.addEventListener('submit', e => {
    e.preventDefault();

    // only do if there is value in input field
    if (newTodoFormEl.newTodo.value) {

        // const todoIds = todos.map(todo => todo.id);
        // const maxTodoId = Math.max(...todoIds);
        // const newTodoId = maxTodoId + 1;

        const maxTodoId = todos.reduce((maxId, todo) => {

            if (todo.id > maxId) {
                return todo.id;
            }

            return maxId;
        }, 0);

        const newTodoId = maxTodoId + 1;

        // push value from form into the todos array
        todos.push({
            id: newTodoId,
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

        const todoId = e.target.dataset.todoId;

        const clickedTodo = todos.find(todo => {
            return todo.id == todoId;
        });

        // console.log(clickedTodo)

        clickedTodo.completed = !clickedTodo.completed;
    };

    reloadList();
});
