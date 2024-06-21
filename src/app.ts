// const names: Array<string> = [""]; // Array<string> ===  string[], arrays of strings

// const promise: Promise<number> = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(10);
//   }, 2000);
// });

// promise.then((res) => {
//   // console.log(res.join()); ERROR because of our generic say result of this promise its number
//   console.log(res.toFixed(2));
// });

// function mergeObjects(obj1: object, obj2: object) {
//   return { ...obj1, ...obj2 };
// }
// console.log(result.); with type object doesn't work because it can be any object

// if we use generic, generic type compiling when we takes params

function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}

// generic behind the scene <{ name: string; hobby: Array<string> },{ age: number }> NO NEED TO WRITE IT (GENERIC DO THIS)

const result = mergeObjects<
  { name: string; hobby: Array<string> },
  { age: number }
>({ name: "Artem", hobby: ["Sport"] }, { age: 61 });

// const result = mergeObjects({ name: "Artem", hobby: ["Sport"] }, 61); doesn't work because generic inherit type object

console.log(result);
