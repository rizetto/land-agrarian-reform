const heroGreetingSpan = document.querySelector('.hero-greeting--highlight')
const heroGreetingItems = [
    "Japanese",
    "American",
    "Spanish"
]

let timeLeft = heroGreetingItems.length;
const startTimer = setInterval(function () {
    if (timeLeft <= 0) {
        timeLeft = heroGreetingItems.length;
    }

    heroGreetingSpan.innerHTML = heroGreetingItems[timeLeft - 1];
    timeLeft -= 1;
}, 1000);