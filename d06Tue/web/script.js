"use strict";
const firstNum = document.getElementById("firstNum");
const oper0 = document.getElementById("oper0");
const secondNum = document.getElementById("secondNum");
const res = document.getElementById("res");
const oper1 = document.getElementById("oper1");
oper1.addEventListener("click", () => {
    let num1 = parseFloat(firstNum.value);
    let num2 = parseFloat(secondNum.value);
    let num3 = res.innerHTML;
    switch (oper0.value) {
        case "+":
            num3 = (num1 + num2).toString();
            break;
        case "-":
            num3 = (num1 - num2).toString();
            break;
        case "*":
            num3 = (num1 * num2).toString();
            break;
        case "/":
            num3 = (num1 / num2).toString();
            break;
        default:
            num3 = "Error";
    }
});
