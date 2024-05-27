const display = document.getElementById("calculator-display");
const numBtn = document.querySelectorAll(".num-btn");
const clearBtn = document.getElementById("clear-btn");
const operatorBtn = document.querySelectorAll(".operator-btn");
const piBtn = document.querySelector(".pi-btn");

let firstNum = "";
let secondNum = "";
let operator = "";
display.innerText = 0;

numBtn.forEach(number => {
    number.addEventListener("click", e => {
        if (operator === "") {
            firstNum += e.target.innerText;
            display.textContent = firstNum;
        } else {
            secondNum += e.target.innerText;
            display.textContent = secondNum;
        }
    })
})

piBtn.addEventListener("click", () => {
    if (operator === "") {
        firstNum = Math.PI.toString();
        display.textContent = firstNum;
    } else {
        secondNum = Math.PI.toString();
        display.textContent = secondNum;
    }
})

operatorBtn.forEach(op => {
    op.addEventListener("click", e => {
        if (e.target.innerText !== "=") {
            if (secondNum !== "") {
                firstNum = calculateResult();
                display.textContent = firstNum;
                secondNum = "";
            }
            operator = e.target.innerText;
        } else {
            if (secondNum !== "") {
                display.textContent = calculateResult();
                firstNum = display.textContent;
                secondNum = "";
                operator = "";
            }
        }
    })
});

function calculateResult() {
    switch (operator) {
        case "+":
            return (parseFloat(firstNum) + parseFloat(secondNum)).toString();
        case "-":
            return (parseFloat(firstNum) - parseFloat(secondNum)).toString();
        case "×":
            return (parseFloat(firstNum) * parseFloat(secondNum)).toString();
        case "÷":
            return (parseFloat(firstNum) / parseFloat(secondNum)).toString();
        case "%":
            return (parseFloat(firstNum) % parseFloat(secondNum)).toString();
        default:
            return firstNum;
    }
}


clearBtn.addEventListener("click", () => {
    firstNum = "";
    secondNum = "";
    operator = "";
    display.innerText = 0;
})