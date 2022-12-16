/*************************************************************************************
 * IMPORTS
 */


import { ITodo } from './interfaces.js'
import { createTodo, fetchTodos, updateTodo } from './api.js'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'


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
	const clickedId = clickedTodo.id as Number
	
	await updateTodo(clickedId, {
		completed: !clickedTodo.completed
	})
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

	await createTodo(newTodo)

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