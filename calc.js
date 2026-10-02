const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const operators = document.querySelectorAll(".operator");
let firstNumber = null;
let operator = null;
let justCalculated = false;

function calculate(a, b, op) {

    if (op === "+") {
        return a + b;
    } else if (op === "-") {
         return a - b;
    } else if (op === "*") {
        return a * b;
    } else {
        if (b === 0) {
            return "Error";
        } else {
            return a / b;
        }
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            display.textContent = "0";
            firstNumber = null;
            operator = null;
            justCalculated = false;
        } else if (value === "=") {
            if (operator === null) {
                return;
            }
            const secondNumber = Number(display.textContent);
            const result = calculate(firstNumber, secondNumber, operator);
            display.textContent = result;
            firstNumber = null;
            operator = null;
            justCalculated = true;
        } else if ("+-*/".includes(value)) {
            if (operator !== null) {
                display.textContent = calculate(firstNumber, Number(display.textContent), operator);
            }
            firstNumber = Number(display.textContent);
            operator = value;
            display.textContent = "0";
            justCalculated = false;
        } else if (display.textContent === "0" || justCalculated === true) {
            display.textContent = value
            justCalculated = false;
        } else {
            display.textContent += value
        }
    });
});
