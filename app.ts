function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log(num);
}

printResult(add(20, 10));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(add(20, 10));
