import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

const todosListEl = document.querySelector('#todos')!
const newTodoFormEl = document.querySelector('#new-todo-form')

type Todo = {
    id: number,
    title: string,
    completed: boolean,
}

const json = localStorage.getItem('todos') ?? '[]'

const todos: Todo[] = JSON.parse(json)

const renderTodos = () => {
    todosListEl.innerHTML = ''

    todosListEl.innerHTML = todos
        .map(todo => `<li class="list-group-item ${todo.completed ? 'completed' : ''}" data-todo-id="${todo.id}">${todo.title}</li>`)
        .join('')
}

const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

newTodoFormEl?.addEventListener('submit', e => {
    e.preventDefault()

    const newTodoTitleEl = document.querySelector<HTMLInputElement>('#new-todo-title')!

    const newTodoTitle = newTodoTitleEl.value
    newTodoTitleEl.value = ''

    if (!newTodoTitle) return

    // Find the highest value ID from the list items. Create a new ID that is 1 more
    const newTodoId = Math.max(0, ...todos.map(todo => todo.id)) + 1

    const newTodo: Todo = {
        id: newTodoId,
        title: newTodoTitle,
        completed: false,
    }

    todos.push(newTodo)
    
    saveTodos()

    renderTodos()
})

todosListEl.addEventListener('click', e => {
    const target = e.target as HTMLElement

    if (target.tagName !== 'LI') {
        return
    }

    const todoId = Number(target.dataset.todoId)

    const foundTodo = todos.find(todo => todo.id === todoId)

    if (foundTodo) {
        foundTodo.completed = !foundTodo.completed

        saveTodos()
    }

    renderTodos()
})

renderTodos()
