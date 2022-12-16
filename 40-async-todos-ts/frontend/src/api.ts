/*************************************************************************************
 * IMPORTS
 */


import { ITodo } from './interfaces.js'


/*************************************************************************************
 * FUNCTIONS
 */


const checkResponse = (res: Response) => {
	if (!res.ok) throw new Error(`Could't fetch data, no response:, ${res.status} ${res.statusText}`)
}

export const createTodo = async (newTodo: ITodo) => {
	const res = await fetch('http://localhost:3001/todos', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(newTodo),
	})
	checkResponse(res)
}

export const fetchTodos = async () => {
	const res = await fetch('http://localhost:3001/todos')
	checkResponse(res)
	return await res.json() as ITodo[]
}

export const updateTodo = async (todoId: Number, data: Object) => {
	const res = await fetch(`http://localhost:3001/todos/${todoId}`, {
			method: 'PATCH',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data),
		})
		checkResponse(res)
		return await res.json() as ITodo[]
}
