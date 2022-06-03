const quotes = [
    {
        quote: "Success is walking from failure with no loss of enthusiasm.",
        author: "Winston Chirchil",
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Tough times never last, but tough people do.",
        author: "Robert H. Schuller",
    },
    {
        quote: "Grind Hard, Shine Hard.",
        author: "Dwayne Johnson",
    },
    {
        quote: "Pain past is pleasure.",
        author: "Unknown",
    },
    {
        quote: "No man is good enough to govern another man without that other's consent.",
        author: "Abraham Lincoln",
    },
    {
        quote: "All great changes are preceded by chaos.",
        author: "Deepak Chopra",
    },
    {
        quote: "Life is not fair get used to it.",
        author: "Bill Gates",
    },
    {
        quote: "The busy bee has no time for sorrow.",
        author: "William Blake",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;