const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const togglerIcon = document.querySelector('.toggler-icon');
let isDark = true;
let evaluationDone = false; // Flag to track whether evaluation has been done

buttons.forEach((item) => {
    item.addEventListener('click', () => {
        if (evaluationDone && item.id !== 'clear') {
            return; // Prevent adding more numbers after evaluation
        }
        if (item.id == 'clear') {
            clearDisplay();
            evaluationDone = false; // Reset evaluation flag on clear
        } else if (item.id == 'backspace') {
            removeLastChar();
        } else if (item.id == 'equal') {
            evaluateExpression();
            evaluationDone = true; // Set evaluation flag to true
        } else {
            appendToDisplay(item.id);
        }
    });
});

themeToggleBtn.addEventListener('click', () => {
    toggleTheme();
});

function clearDisplay() {
    display.innerText = '';
}

function removeLastChar() {
    let string = display.innerText.toString();
    display.innerText = string.substr(0, string.length - 1);
}

function evaluateExpression() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}

function appendToDisplay(value) {
    display.innerText += value;
}

function toggleTheme() {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}
