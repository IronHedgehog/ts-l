"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function writeResult(num) {
    console.log(num);
}
writeResult(add(20, 10));
let combineValues;
combineValues = add;
console.log(add(20, 10));
function addAndHandle(n1, n2, callBack) {
    const result = n1 + n2;
    callBack(result);
}
addAndHandle(20, 10, (num) => {
    console.log(num);
    return false;
});
