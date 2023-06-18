import { Factor } from "./Factor";

let num = parseInt(process.argv[2]);
let ft = new Factor(num);
ft.factor();