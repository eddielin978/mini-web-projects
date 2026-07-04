import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });
let num1: number = parseInt(prompt("Enter number 1: "));
let operation: string = prompt("Enter operation (+, -, *, or /): ");
let num2: number = parseInt(prompt("Enter number 2: "));
function doMath(num1: number, num2: number, operation: string) {
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    return "Please answer correctly!";
  }
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Please answer correctly!";
  }
}
console.log(`Answer: ${doMath(num1, num2, operation)}`);
