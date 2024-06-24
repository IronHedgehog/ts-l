// decorators starts work when class is defined
// Decorator in libraries and resources start with capital letter
function Logger(descriptionString: string) {
  // Decorator factory(can take params and work with them)
  return function (constructor: Function) {
    console.log(descriptionString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const person = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = person.name;
    }
  };
}
// @Logger("LOGGING - PERSON")
@WithTemplate("<h1>This is template</h1>", "app")
class Person {
  name = "Artem";

  constructor() {
    console.log("clg on constructor");
  }
}

const pers = new Person();
console.log(pers);
