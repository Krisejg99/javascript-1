import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

interface ITodo {
	id: number,
	title: string,
	completed: boolean
}

let todos: ITodo[] = []



const fetchTodos = async () => {
	const res = await fetch('http://localhost:3001/todos')
	if (!res.ok) throw new Error(`Could't fetch data, no respornse:, ${res.status} ${res.statusText}`)
	return await res.json() as ITodo[]
}

const getTodos = async () => {
	todos = await fetchTodos()
	renderTodos()
}

const renderTodos = () => {
	const todoListEl = document.querySelector('#todos')!
	todoListEl.innerHTML = ''
	todoListEl.innerHTML = todos
		.map(todo => `<li class="list-group-item ${todo.completed ? 'completed' : ''}">${todo.title}</li>`)
		.join('')
}

getTodos()
