// decorators starts work when class is defined
// Decorator in libraries and resources start with capital letter

// CLASS DECORATOR
function Logger(descriptionString: string) {
  // Decorator factory(can take params and work with them)
  return function (constructor: Function) {
    console.log(descriptionString);
    console.log(constructor);
  };
}

// CLASS DECORATOR
function WithTemplate(template: string, hookId: string) {
  // new (return new object(class) with any parameters) and return object with name parameter
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("render");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
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

function AutoBind(_: any, _1: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const updatedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    },
  };
  return updatedDescriptor;
}
class Printer {
  message: string = "This works!";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button")! as HTMLButtonElement;

//button?.addEventListener("click", p.showMessage); // undefined because this from addEventListener. We need from p

//button?.addEventListener("click", p.showMessage.bind(p)); //bind needed context and all work ok. Lets do DECORATOR for AUTOMATICALLY bind

button?.addEventListener("click", p.showMessage); // work with DECORATOR (AutoBind)

interface ValidationConfig {
  [property: string]: {
    [validatebleProp: string]: string[]; // ["Required", 'positive']
  };
}
const registeredValidators: ValidationConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
    // [propName]: ["required"],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
    // [propName]: ["positive"],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")! as HTMLFormElement;

courseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleEL = document.getElementById("title")! as HTMLInputElement;
  const priceEL = document.getElementById("price")! as HTMLInputElement;

  const title = titleEL.value;
  const price = Number(priceEL.value);

  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert("Invalid input");
    return;
  }

  console.log(createdCourse);
});
