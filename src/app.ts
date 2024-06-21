// interface super clear for the objects describe
// type more flexible and compilation without error

// if you want describe objects use interface

//interface can be implemented and we can add something to class it's main difference between interfaces and types

// interface Person {
//   name: string;

//   great(phrase: string): void;
// }
interface Greetable {
  name: string;

  great(phrase: string): void;
}
[].join();
// implement - key word, after use can add many interfaces separate  with coma
class Person implements Greetable {
  constructor(public name: string, public age: number) {}

  great(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

const user: Greetable = new Person("Artem", 32);
console.log(user);

// const user: Person = {
//   name: "Artem",
//   // age: 23,
//   great(phrase: string): void {
//     console.log(phrase + " " + this.name);
//   },
// };

user.great("Welcome here");
