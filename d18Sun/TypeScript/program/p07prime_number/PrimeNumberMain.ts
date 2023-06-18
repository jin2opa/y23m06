import { PrimeNumber } from "./PrimeNumber";

let num: number = Number(process.argv[2]);
let prn = new PrimeNumber(num);
prn.getPrimeNumber(); 