function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log(num);
}
printResult(add(20, 10));
var combineValues;
combineValues = add;
console.log(add(20, 10));
function addAndHandle(n1, n2, callBack) {
    var result = n1 + n2;
    callBack(result);
}
addAndHandle(20, 10, function (num) {
    console.log(num);
});
