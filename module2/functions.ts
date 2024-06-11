function add(n1: number, n2: number): number {
  return n1 + n2;
}

function writeResult(num: number): void {
  console.log(num);
}

writeResult(add(20, 10));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(add(20, 10));

function addAndHandle(n1: number, n2: number, callBack: (a: number) => void) {
  const result = n1 + n2;
  callBack(result);
}

addAndHandle(20, 10, (num) => {
  console.log(num);
  return false;
});
