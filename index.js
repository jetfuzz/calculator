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
            if (firstNum.length < 9) {
                firstNum += e.target.innerText;
            }
            display.textContent = firstNum;
        } else {
            if (secondNum.length < 9) {
                secondNum += e.target.innerText;
            }
            display.textContent = secondNum;
        }
    })
})

piBtn.addEventListener("click", () => {
    if (operator === "") {
        firstNum = Math.PI.toString().substring(0, 9);
        display.textContent = firstNum;
    } else {
        secondNum = Math.PI.toString().substring(0, 9);
        display.textContent = secondNum;
    }
})

operatorBtn.forEach(op => {
    op.addEventListener("click", e => {
        if (e.target.innerText !== "=") {
            if (secondNum !== "") {
                firstNum = calculateResult().substring(0, 9);
                display.textContent = firstNum;
                secondNum = "";
            }
            operator = e.target.innerText;
        } else {
            if (secondNum !== "") {
                display.textContent = calculateResult().substring(0, 9);
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