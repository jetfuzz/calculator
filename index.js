let display = document.getElementById("calculator-display");
let numBtn = document.querySelectorAll(".num-btn");
let clearBtn = document.getElementById("clear-btn");
let operatorBtn = document.querySelectorAll(".operator-btn");

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

operatorBtn.forEach(op => {
    op.addEventListener("click", e => {
        if (e.target.innerText !== "=") {
            operator = e.target.innerText;

            console.log(firstNum);
            console.log(operator);

        } else {
            console.log(secondNum);

            switch (operator) {
                case "+":
                    console.log(parseFloat(firstNum) + parseFloat(secondNum));
                    display.textContent = parseFloat(firstNum) + parseFloat(secondNum);
                    break;
                case "-":
                    console.log(parseFloat(firstNum) - parseFloat(secondNum));
                    display.textContent = parseFloat(firstNum) - parseFloat(secondNum);
                    break;
                case "×":
                    console.log(parseFloat(firstNum) * parseFloat(secondNum));
                    display.textContent = parseFloat(firstNum) * parseFloat(secondNum);
                    break;
                case "÷":
                    console.log(parseFloat(firstNum) / parseFloat(secondNum));
                    display.textContent = parseFloat(firstNum) / parseFloat(secondNum);
                    break;
                case "%":
                    console.log(parseFloat(firstNum) % parseFloat(secondNum));
                    display.textContent = parseFloat(firstNum) % parseFloat(secondNum);
                    break;
                default:
                    break;
            }
        }
    });
});

clearBtn.addEventListener("click", () => {
    firstNum = "";
    secondNum = "";
    operator = "";
    display.innerText = 0;
})