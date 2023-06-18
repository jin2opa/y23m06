"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PrimeNumber_1 = require("./PrimeNumber");
let num = Number(process.argv[2]);
let prn = new PrimeNumber_1.PrimeNumber(num);
prn.getPrimeNumber();
