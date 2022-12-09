import 'bootstrap/dist/css/bootstrap.css'
import './style.css'


/*************************************************************************************
 * INTERFACES
 */

interface ITodo {
	id?: number,
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


const checkRes = (res: Response) => {
	if (!res.ok) throw new Error(`Could't fetch data, no respornse:, ${res.status} ${res.statusText}`)
}

const createNewTodo = async (newTodo: ITodo) => {
	const res = await fetch('http://localhost:3001/todos', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(newTodo),
	})

	checkRes(res)
}

const fetchTodos = async () => {
	const res = await fetch('http://localhost:3001/todos')
	checkRes(res)
	return await res.json() as ITodo[]
}

const getTodos = async () => {
	todos = await fetchTodos()
	renderTodos()
}

const renderTodos = () => {
	const todoListEl = document.querySelector('#todos')!
	const completedTodoListEl = document.querySelector('#completed-todos')!

	const refreshTodos = (el: Element, boo: Boolean) => {
		el.innerHTML = ''
		el.innerHTML = todos
			.filter(todo => todo.completed === boo)
			.map(todo => `
				<li class="list-group-item data-todo-id="${todo.id}">
					${todo.title}
				</li>`)
			.join('')
	}
	refreshTodos(todoListEl, false)
	refreshTodos(completedTodoListEl, true)

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

	const newTodo: ITodo = {
		title: newTodoTitle,
		completed: false
	}

	await createNewTodo(newTodo)

	getTodos()
})


/*************************************************************************************
 * START
 */


getTodos()