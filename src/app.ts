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
interface lengthy {
  length: number;
}

const countAndDescribe = <T extends lengthy>(element: T): [T, string] => {
  let description = "No value here";
  if (element.length === 1) {
    description = "Only one element here";
  } else if (element.length > 1) {
    description = `${element.length} elements here`;
  }
  return [element, description];
};

console.log(countAndDescribe("Welcome here"));
// T is any object, U is any key of T
const extractAndConvert = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return obj[key];
};

console.log(extractAndConvert({ name: "Artem" }, "name"));

// GENERIC CLASSES

class DataStorage<T extends number | string | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Artem");
textStorage.addItem("Max");
textStorage.removeItem("Max");
textStorage.getItems();
const numberStorage = new DataStorage<number>();

// const objectStorage = new DataStorage<object>();

// const addedObj = { name: "Max" };
// objectStorage.addItem({ name: "Artem" });
// objectStorage.addItem(addedObj);
// objectStorage.removeItem(addedObj);
// console.log(objectStorage.getItems());
