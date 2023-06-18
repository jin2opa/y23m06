"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Factorial_1 = require("./Factorial");
let num = Number(process.argv[2]);
let res = Factorial_1.Factorial.factorial(num);
console.log(res);
