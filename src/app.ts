// const named = "User";
// let age = 20;

// age = 29;

// function add(n1: number, n2: number): number {
//   let result;
//   result = n1 + n2;
//   return result;
// }

// if (age > 20) {
//   var isOld = true;
//   let isOld = true;
// }

// console.log(isOld);

// const add = (n1: number, n2: number = 1): number => {
//   return n1 + n2;
// };

// const showResult: (a: number | string) => void = (result) =>
//   console.log(result);
// const showResult = (result: number | string): void => console.log(result);

// showResult(add(5));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["hiking", ...hobbies];

activeHobbies.push(...hobbies);

const person = {
  firstName: "User",
  age: "30",
};

const newPerson = { ...person }; // perfect copy

const add = (...numbers: number[]): number => {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
};

const addedNumbers = add(2, 5, 1, 2, 6, 7, 8, 0);
console.log(addedNumbers);

const [hobby1, hobby2, ...another] = hobbies; // array destructure

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person; // object destructure firstName: userName, - rename

console.log(userName, age);
