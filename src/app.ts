// decorators starts work when class is defined
// Decorator in libraries and resources start with capital letter
function Logger(constructor: Function) {
  console.log("Logger at work");
  console.log(constructor);
}
@Logger
class Person {
  name = "Artem";

  constructor() {
    console.log("clg on constructor");
  }
}

const pers = new Person();
console.log(pers);
