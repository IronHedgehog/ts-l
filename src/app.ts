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
// Decorators execute from bottom to top but created standart from top to bottom
@Logger("LOGGING - PERSON")
@WithTemplate("<h1>This is template</h1>", "app")
class Person {
  name = "Artem";

  constructor() {
    console.log("clg on constructor");
  }
}

const pers = new Person();
console.log(pers);

// PROPERTY DECORATOR

function Log(target: any, propertyName: string | Symbol) {
  console.log(target, propertyName);
}

// ACCESSOR DECORATOR

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("ACCESSOR DECORATOR");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// METHOD DECORATOR
function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("METHOD DECORATOR");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// PARAMETER DECORATOR

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("PARAMETER DECORATOR");
  console.log(target);
  // NAME OF THE METHOD WHERE WE HAVE PARAM
  console.log(name);
  // INDEX OF PARAM
  console.log(position);
}

class Product {
  @Log
  title: string;

  constructor(t: string, private _price: number) {
    this.title = t;
  }

  @Log2
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Price must be positive number");
    }
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
