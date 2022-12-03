/**
 * Async Todos
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
let todos = [];

const createNewTodo = async newTodo => {
    // Post todo to server
    const res = await fetch('http://localhost:3001/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
    });

    // Check that everything went ok
    if (!res.ok) {
        throw new Error('Could not create todo, reason:', res.status, res.statusText);
    };

    // Check the response
    return await res.json();
};

const fetchTodos = async () => {
    const res = await fetch('http://localhost:3001/todos');

    if (!res.ok) {
        throw new Error('Could not fetch todos, reason:', res.status, res.statusText);
    };

    return await res.json();
};

const getTodos = async () => {
    const data = await fetchTodos();
    todos = data;
    renderTodos();
};

// Render todos to DOM
const renderTodos = () => {
    console.log("rendering todos...");

    const lis = todos.map(todo => {
        let cssClasses = "list-group-item";

        if (todo.completed) {
            cssClasses += " completed";   // "list-group-item completed"
        }

        return `
			<li class="${cssClasses}" data-todo-id="${todo.id}">
				${todo.title}
			</li>
		`;
    });

    todosEl.innerHTML = lis.join('');
}

// Update exsiting todo on the server
const updateTodo = async (todoId, data) => {
    // Post todo to server
    const res = await fetch(`http://localhost:3001/todos/${todoId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    // Check that everything went ok
    if (!res.ok) {
        throw new Error('Could not create todo, reason:', res.status, res.statusText);
    };

    // Check the response
    return await res.json();
};

// Listen for click-events on `#todos` (the `<ul>`)
todosEl.addEventListener('click', async (e) => {

    if (e.target.tagName === "LI") {
        // get the `data-todo-id` attribute from the LI element
        const clickedTodoId = Number(e.target.dataset.todoId);     // `data-todo-id`

        // search todos for the todo with the same id as the clicked id
        const clickedTodo = todos.find((todo) => todo.id === clickedTodoId);

        // change completed-status of found todo
        await updateTodo(clickedTodo.id, {
            completed: !clickedTodo.completed
        });

        // get updated todos
        getTodos();
    }; 
});

// Create a new todo when form is submitted
newTodoFormEl.addEventListener('submit', async (e) => {
    // Prevent form from being submitted (to the server)
    e.preventDefault();

    // Create new todo
    const newTodo = {
        title: newTodoFormEl.newTodo.value,
        completed: false,
    };

    // Post todo to server
    try {
        await createNewTodo(newTodo);
    }
    catch (e) {
        console.log(e);
        alert(e);
        return;
    };


    // Get the new list of todos from the server
    getTodos();

    // Reset form
    newTodoFormEl.reset();
});

getTodos();