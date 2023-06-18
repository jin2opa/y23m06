import { Calc02 } from "./calc02";

let first: number = Number(process.argv[2]);
let second: number = Number(process.argv[3]);
let third: number = Number(process.argv[4]);
let fourth: number = Number(process.argv[5]);

let cal = new Calc02(first, second, third, fourth);

console.log(cal.add());
console.log(cal.subtraction());
console.log(cal.multiply());