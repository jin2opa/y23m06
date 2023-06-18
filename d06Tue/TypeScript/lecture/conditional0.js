"use strict";
let num0 = Number(process.argv[2]);
let num1 = Number(process.argv[3]);
let operator = process.argv[4];
switch (operator) {
    case "+":
        console.log(num0 + num1);
        break;
    case "-":
        console.log(num0 - num1);
        break;
    case "*":
        console.log(num0 * num1);
        break;
    case "/":
        console.log(num0 / num1);
        break;
    default:
        console.log("Invalid operator");
}
