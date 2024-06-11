"use strict";
// union type
function combine(
// union type
// input1: number | string,
input1, 
// input2: number | string,
input2, 
// Literal type
resultConversion) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "is-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combine(30, 26, "is-number");
console.log(combinedAges);
const combinedAgesStrings = combine("30", "26", "is-number");
const combinedNames = combine("Max", "Anna", "is-string");
console.log(combinedNames);