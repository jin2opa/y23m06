"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryNumber_1 = require("./BinaryNumber");
let num = Number(process.argv[2]);
let bn = new BinaryNumber_1.BinaryNumber(num);
let res = bn.getNumber();
console.log(res);
