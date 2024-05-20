//Create functions for all basic math operators
//(addition, subtraction, multiply and divide)

//Create variables for each aspect of calculation

let firstNum;
let secondNum;
let operator;

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

//Create function operate() that takes an operator and two numbers, then calls on above function on the numbers.

function operate(firstNum, secondNum, operator) {
    if (operator === add) {
        return firstNum + secondNum
    } else if (operator === subtract) {
        return firstNum - secondNum
    } else if (operator === multiply) {
        return firstNum * secondNum
    } else return firstNum / secondNum;
}

console.log(operate(3,5,add));
console.log(operate(3,5,subtract));
console.log(operate(3,5,multiply));
console.log(operate(3,5,divide));