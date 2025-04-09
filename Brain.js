const quotes = [
    { text: "/The best way to predict the future is to invent it./", author: "— Alan Kay" },
    { text: "/Imagination is more important than knowledge./", author: "— Albert Einstein" },
    { text: "/Stay hungry. Stay foolish./", author: "— Steve Jobs" },
    { text: "/What I cannot create, I do not understand./", author: "— Richard Feynman" }
];

let currentIndex = 0;

function changeQuote() {
    currentIndex = (currentIndex + 1) % quotes.length;
    document.getElementById('quote').textContent = quotes[currentIndex].text;
    document.querySelector('.quote-by').textContent = quotes[currentIndex].author;
}

setInterval(changeQuote, 12000);