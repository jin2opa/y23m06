import { Power } from "./Power";

let base: number = Number(process.argv[2]);
let exponent: number = Number(process.argv[3]);

let pow = new Power(base, exponent);
let res = pow.power();
console.log(res);