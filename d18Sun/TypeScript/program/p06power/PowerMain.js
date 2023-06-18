"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Power_1 = require("./Power");
let base = Number(process.argv[2]);
let exponent = Number(process.argv[3]);
let pow = new Power_1.Power(base, exponent);
let res = pow.power();
console.log(res);
