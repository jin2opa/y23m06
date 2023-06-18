"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Factor_1 = require("./Factor");
let num = parseInt(process.argv[2]);
let ft = new Factor_1.Factor(num);
ft.factor();
