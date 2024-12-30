const quotes = [
    {
        quote: "명언내용-1",
        author: "작가-1"
    },
    {
        quote: "명언내용-2",
        author: "작가-2"
    },
    {
        quote: "명언내용-3",
        author: "작가-3"
    },
    {
        quote: "명언내용-4",
        author: "작가-4"
    },
    {
        quote: "명언내용-5",
        author: "작가-5"
    },
    {
        quote: "명언내용-6",
        author: "작가-6"
    },
    {
        quote: "명언내용-7",
        author: "작가-7"
    },
    {
        quote: "명언내용-8",
        author: "작가-8"
    },
    {
        quote: "명언내용-9",
        author: "작가-9"
    },
    {
        quote: "명언내용-10",
        author: "작가-10"
    },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
const randomNumber = Math.floor(Math.random() * quotes.length)
const todayQuote = quotes[randomNumber]
console.log(randomNumber)
console.log(quotes[randomNumber].quote)
console.log(quotes[randomNumber].author)

quote.innerText = todayQuote.quote
author.innerText = todayQuote.author