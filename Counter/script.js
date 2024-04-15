// Getting the counter element
const counterElement = document.getElementById('counter');

// Getting the buttons
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');

// Setting initial count value
let count = 0;

// Function to update the counter value
function updateCounter() {
    counterElement.textContent = count;
}

// Function to handle button clicks
function handleButtonClick(action) {
    if (action === 'increment') {
        count++;
    } else if (action === 'decrement' && count > 0) {
        count--;
    } else if (action === 'reset') {
        count = 0;
    }
    updateCounter();
}

// Adding event listeners to the buttons
plusButton.addEventListener('click', () => handleButtonClick('increment'));
minusButton.addEventListener('click', () => handleButtonClick('decrement'));
resetButton.addEventListener('click', () => handleButtonClick('reset'));

// Initializing the counter
updateCounter();

