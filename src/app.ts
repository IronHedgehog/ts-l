// FUNCTIONS
// we can write interfaces for functions (exception)
// type addFunc = (a: number, b: number) => number;

// for functions use type, but interface need to know
interface addFunc {
  (a: number, b: number): number;
}

const add: addFunc = (a: number, b: number) => a + b;

// CLASSES

// interface super clear for the objects describe
// type more flexible and compilation without error

// if you want describe objects use interface

//interface can be implemented and we can add something to class it's main difference between interfaces and types

// interface Person {
//   name: string;

//   great(phrase: string): void;
// }

// private and public not supported but we have readonly

interface Named {
  readonly name?: string;
  inputName?: string;
}
// extends interface for different objects (maybe we need not Greeatable person but this person need to have name)

// can extends more than one
interface Greetable extends Named {
  great(phrase: string): void;
}
[].join();
// implement - key word, after use can add many interfaces separate  with coma

// We have optional values (?) because of this everywhere we need to check undefined values(if else statement)
class Person implements Greetable {
  constructor(public name?: string, public age?: number) {}

  great(phrase: string): void {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

const user: Greetable = new Person();
// user.name = "123"; gives error because of read only property in interface
console.log(user);

// const user: Person = {
//   name: "Artem",
//   // age: 23,
//   great(phrase: string): void {
//     console.log(phrase + " " + this.name);
//   },
// };

user.great("Welcome here");
