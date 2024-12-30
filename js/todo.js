const todoForm = document.querySelector("#todo-form")
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector("#todo-list")

const TODOS_KEY = "todos"

let todos = []

function sexyFilter(todo) {
    // return todo.id !== 
}

function saveTodos(todos) {
    todos = JSON.stringify(todos)
    localStorage.setItem(TODOS_KEY, todos)
}

function deleteTodo(event) {
    event.preventDefault();
    // event.target.parentElement
    const li = event.target.parentElement
    console.log(li.id)
    console.log(todos)
    todos = todos.filter(todo => todo.id !== parseInt(li.id), console.log(Number(li.id)))
    console.log(todos)
    saveTodos(todos)
    li.remove()
}

function paintTodo(newTodo) {
    const li = document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span")
    span.innerText = newTodo.text
    const button = document.createElement("button")
    button.innerText = "❌"
    li.appendChild(span)
    li.appendChild(button)
    todoList.appendChild(li)
    console.log(todoList)
    saveTodos(todos)

    button.addEventListener("click", deleteTodo)
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value
    const newTodoObject = { id: Date.now(), text: newTodo }
    todos.push(newTodoObject)
    paintTodo(newTodoObject)
    saveTodos(todos)
    todoInput.value = ""
}

todoForm.addEventListener("submit", handleTodoSubmit)

const savedTodos = localStorage.getItem(TODOS_KEY)
if (savedTodos) {
    const parseTodos = JSON.parse(savedTodos)
    console.log(parseTodos)
    todos = parseTodos

    parseTodos.forEach(paintTodo);
}
