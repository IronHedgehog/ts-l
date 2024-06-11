const named = "User";
let age = 20;

age = 29;

// function add(n1: number, n2: number): number {
//   let result;
//   result = n1 + n2;
//   return result;
// }

if (age > 20) {
  //   var isOld = true;
  //   let isOld = true;
}

// console.log(isOld);

const add = (n1: number, n2: number = 1): number => {
  return n1 + n2;
};

// const showResult: (a: number | string) => void = (result) =>
//   console.log(result);
const showResult = (result: number | string): void => console.log(result);

showResult(add(5));
