function add(n1, n2, showResult, phrase) {
    //JS
    //   if (typeof n1 !== "number" || typeof n2 !== "number") {
    //     throw new Error("Incorrect input");
    //   }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var num1;
num1 = 5;
var num2 = 5.5;
var printResult = false;
var resultPhrase = "result is: ";
add(num1, num2, printResult, resultPhrase);
