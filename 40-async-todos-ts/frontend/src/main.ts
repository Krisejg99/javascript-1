import 'bootstrap/dist/css/bootstrap.css'
import './style.css'


/*************************************************************************************
 * INTERFACES
 */

interface ITodo {
	id: number,
	title: string,
	completed: boolean
}


/*************************************************************************************
 * VARIABLES
 */


let todos: ITodo[] = []


/*************************************************************************************
 * FUNCTIONS
 */


const changeTodoCompleted = async (e: Event) => {
	const target = e.target as HTMLElement

	if (target.tagName !== 'LI') {
		return
	}

	const todoId = Number(target.dataset.todoId)
	const clickedTodo: ITodo = todos.find(todo => todo.id === todoId) as ITodo
	
	await updateTodo(clickedTodo.id, {
		completed: !clickedTodo.completed
	})
}

const checkResponse = (res: Response) => {
	if (!res.ok) throw new Error(`Could't fetch data, no response:, ${res.status} ${res.statusText}`)
}

const createNewTodo = async (newTodo: ITodo) => {
	const res = await fetch('http://localhost:3001/todos', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(newTodo),
	})

	checkResponse(res)
}

const fetchTodos = async () => {
	const res = await fetch('http://localhost:3001/todos')
	checkResponse(res)
	return await res.json() as ITodo[]
}

const getTodos = async () => {
	todos = await fetchTodos()
	renderTodos()
}

const refreshTodos = (el: Element, boo: Boolean) => {
	el.innerHTML = ''
	el.innerHTML = todos
		.filter(todo => todo.completed === boo)
		.map(todo => `
			<li class="list-group-item" data-todo-id="${todo.id}">
				${todo.title}
			</li>`)
		.join('')
}

const renderTodos = () => {
	const todoListEl = document.querySelector('#todos')!
	const completedTodoListEl = document.querySelector('#completed-todos')!

	refreshTodos(todoListEl, false)
	refreshTodos(completedTodoListEl, true)

}

const updateTodo = async (todoId: number, data: object) => {
	const res = await fetch(`http://localhost:3001/todos/${todoId}`, {
			method: 'PATCH',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data),
		})

		checkResponse(res)

		return await res.json();
}


/*************************************************************************************
 * EVENT LISTENERS
 */


document.querySelector('#new-todo-form')?.addEventListener('submit', async e => {
	e.preventDefault()

	const newTodoEl = document.querySelector('#newTodo') as HTMLInputElement

	if (!newTodoEl.value) { 
		alert("That's not an item")
		return
	}

	const newTodoTitle = newTodoEl.value
	newTodoEl.value = ''

	// Find the highest value ID from the list items. Create a new ID that is 1 more
    const newTodoId = Math.max(...todos.map(todo => todo.id)) + 1

	const newTodo: ITodo = {
		id: newTodoId,
		title: newTodoTitle,
		completed: false
	}

	await createNewTodo(newTodo)

	getTodos()
})

document.querySelector('#todos')?.addEventListener('click', async e => {
	await changeTodoCompleted(e)
	getTodos()
})

document.querySelector('#completed-todos')?.addEventListener('click', async e => {
	await changeTodoCompleted(e)
	getTodos()
})

/*************************************************************************************
 * START
 */


getTodos()