let display = document.getElementById("calculator-display")
let calculatorBtn = document.querySelectorAll(".calculator-btn")
let clearBtn = document.getElementById("clear-btn")
let operatorBtn = document.querySelectorAll("operator-btn")
let equalsBtn = document.getElementById("equals-btn")

let x;
let y;
let operator;

display.innerText = 0;

function add(a, b) {
    let sum = a + b;
    return sum;
}

function subtract(a, b) {
    let sum = a - b;
    return sum;
}

function multiply(a, b) {
    let sum = a * b;
    return sum;
}

function divide(a, b) {
    let sum = a / b;
    return sum;
}

function operate(x, y, operator) {
    if (operator === add) {
        return x + y
    } else if (operator === subtract) {
        return x - y
    } else if (operator === multiply) {
        return x * y
    } else return x / y;
}

//create the functions that populate the display when you click the number buttons
//store display value in a variable to use later

function calculatorDisplayValue() {
    let x = calculatorBtn.forEach(button => button.addEventListener("click", () => {
        let buttonContent = button.textContent;
        display.textContent = buttonContent;
    }))
}

function clearDisplay() {
    clearBtn.addEventListener("click", () => {

    })
}

calculatorDisplayValue()