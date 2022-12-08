import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

const todosListEl = document.querySelector('#todos')!
const newTodoFormEl = document.querySelector('#new-todo-form')

type Todo = {
    title: string,
    completed: boolean,
}

const todos: Todo[] = []

const renderTodos = () => {
    todosListEl.innerHTML = ''

    todosListEl.innerHTML = todos
        .map(todo => `<li class="list-group-item ${todo.completed ? 'completed' : ''}">${todo.title}</li>`)
        .join('')
}

newTodoFormEl?.addEventListener('submit', e => {
    e.preventDefault()

    const newTodoTitle = document.querySelector<HTMLInputElement>('#new-todo-title')?.value
    if (!newTodoTitle) return

    const newTodo: Todo = {
        title: newTodoTitle,
        completed: false,
    }

    todos.push(newTodo)
    renderTodos()

    document.querySelector<HTMLInputElement>('#new-todo-title')!.value = ''
})
