import { Factorial } from "./Factorial";

let num: number = Number(process.argv[2]);
let res = Factorial.factorial(num);
console.log(res);