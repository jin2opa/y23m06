let num0: number= Number(process.argv[2]);
let num1: number= Number(process.argv[3]);
let operator: string = process.argv[4];

switch (operator) {
  case "+":
    console.log(num0 + num1);
    break;
  case "-":
    console.log(num0 - num1);
    break;
  case "*":
    console.log(num0 * num1);
    break;
  case "/":
    console.log(num0 / num1);
    break;
  default:
    console.log("Invalid operator");
}