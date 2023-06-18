
  const firstNum = document.getElementById("firstNum") as HTMLInputElement;
  const oper0 = document.getElementById("oper0") as HTMLInputElement;
  const secondNum = document.getElementById("secondNum") as HTMLInputElement;
  const res = document.getElementById("res") as HTMLInputElement;
  const oper1 = document.getElementById("oper1") as HTMLInputElement;

  oper1.addEventListener("click", () => {
    let num1: number = parseFloat(firstNum.value);
    let num2: number = parseFloat(secondNum.value);
    let num3: string = res.innerHTML;
    switch (oper0.value) {
      case "+":
        num3 = (num1 + num2).toString();
        break;
      case "-":
        num3 = (num1 - num2).toString();
        break;
      case "*":
        num3 = (num1 * num2).toString();
        break;
      case "/":
        num3 = (num1 / num2).toString();
        break;
      default:
        num3 = "Error";
    }
  });

