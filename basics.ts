function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //JS
  //   if (typeof n1 !== "number" || typeof n2 !== "number") {
  //     throw new Error("Incorrect input");
  //   }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let num1: number;
num1 = 5;
const num2 = 5.5;
const printResult = false;
const resultPhrase = "result is: ";

add(num1, num2, printResult, resultPhrase);
