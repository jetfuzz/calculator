let display = document.getElementById("calculator-display");
let numBtn = document.querySelectorAll(".num-btn");
let clearBtn = document.getElementById("clear-btn");
let equalsBtn = document.getElementById("equals-btn");
let operatorBtn = document.querySelectorAll(".operator-btn");

let firstNum = "";
let secondNum = "";
let operator = "";

display.innerText = 0;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(firstNum, secondNum, operator) {
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);

    if (operator === "+") {
        return firstNum + secondNum
    } else if (operator === "-") {
        return firstNum - secondNum
    } else if (operator === "&times") {
        return firstNum * secondNum
    } else if (operator === "÷") {
        return firstNum / secondNum
    } else return "lmao"
}

//Display numbers on button click
numBtn.forEach(button => button.addEventListener("click", () => {
    let buttonContent = button.textContent;
    display.textContent = buttonContent;
}))

numBtn.forEach(number => {
    number.addEventListener("click", e => {
        if (operator === "") {
            firstNum += e.target.innerText;
            console.log(firstNum)
        } else {
            secondNum += e.target.innerText;
            console.log(secondNum)
        }
    })
})

operatorBtn.forEach(op => {
    op.addEventListener("click", e => {
        operator = e.target.innerText;
        console.log(operator);
    });
});

equalsBtn.addEventListener("click", () => {
    console.log(operate(firstNum, secondNum, operator));
    display.textContent = operate(firstNum, secondNum, operator);
})

clearBtn.addEventListener("click", () => {
    firstNum = "";
    secondNum = "";
    operator = "";
    display.innerText = 0;
})