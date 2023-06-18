import { BinaryNumber } from "./BinaryNumber";

let num:number = Number(process.argv[2]);
let bn = new BinaryNumber(num);
let res = bn.getNumber();
console.log(res);