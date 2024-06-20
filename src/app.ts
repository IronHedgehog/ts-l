interface Person {
  name: string;
  age: number;

  great(phrase: string): void;
}

let user: Person = {
  name: "Artem",
  age: 23,
  great(phrase: string): void {
    console.log(phrase + " " + this.name);
  },
};

user.great("Welcome here");
