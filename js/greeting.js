const loginForm = document.getElementById("login-form")
const loginInput = loginForm.querySelector("input")
const clockContainer = document.getElementById("clock")
const greetingContainer = document.getElementById("greeting")
const todoFormContainer = document.getElementById("todo-form")
const todoListContainer = document.getElementById("todo-list")
const quoteContainer = document.getElementById("quote")
const weatherContainer = document.getElementById("weather")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

const saveUsername = localStorage.getItem(USERNAME_KEY)


function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username)
    loginForm.classList.add(HIDDEN_CLASSNAME)
    paintGreetings(username)
    console.log(username)
}

function paintGreetings(username) {
    greetingContainer.innerText = `Hello ${username}!`

    clockContainer.classList.remove(HIDDEN_CLASSNAME)
    greetingContainer.classList.remove(HIDDEN_CLASSNAME)
    todoFormContainer.classList.remove(HIDDEN_CLASSNAME)
    todoListContainer.classList.remove(HIDDEN_CLASSNAME)
    quoteContainer.classList.remove(HIDDEN_CLASSNAME)
    weatherContainer.classList.remove(HIDDEN_CLASSNAME)
}

if (saveUsername) {
    console.log(saveUsername)
    loginForm.classList.add(HIDDEN_CLASSNAME)
    paintGreetings(saveUsername)
} else {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    greeting.classList.add(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
}
