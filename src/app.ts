// Intersection Types

type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};

// intersection type
type employeeAdmin = Admin & Employee;

const admin: employeeAdmin = {
  name: "Artem",
  privileges: ["moderate chat"],
  startDate: new Date(),
};

type combinable = string | number;
type numeric = number | boolean;

// intersection type
type universalType = combinable & numeric;

function add(a: combinable, b: combinable) {
  if (typeof a === "string" || typeof b === "string") {
    // type guard needs if we combine two or more types We need to check types
    return a.toString() + b.toString();
  }
  return a + b;
}

type unknownEmployee = Admin | Employee;
function printEmployeeInfo(employee: unknownEmployee): void {
  console.log("name " + employee.name);
  if ("privileges" in employee) {
    // if we have property privileges in object employee (type guard)
    console.log("privileges " + employee.privileges);
  }
  if ("startDate" in employee) {
    // if we have property startDate in object employee (type guard)
    console.log("StartDate " + employee.startDate.toLocaleDateString());
  }
}

printEmployeeInfo(admin); // work
printEmployeeInfo({ name: "Max", startDate: new Date() }); //also work without property privileges because of we have if check

class Car {
  drive() {
    console.log("driving...");
  }
}
class Truck {
  drive() {
    console.log("driving Truck...");
  }

  loadCargo(value: number) {
    console.log("Load " + value);
  }
}

type Vehicle = Car | Truck;

const v1: Vehicle = new Car();
const v2: Vehicle = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ("loadCargo" in vehicle) {
  //   vehicle.loadCargo(2000);
  // } work

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(3000);
  } // check what class have this method if truck all ok.
}

useVehicle(v1);
useVehicle(v2);

//
// Discriminated Unions
//
interface Bird {
  type: "bird"; // literal type
  flyingSpeed: number;
}

interface Horse {
  type: "horse"; // literal type
  runningSpeed: number;
}

type Animal = Bird | Horse; // union type

function moveAnimal(animal: Animal) {
  let speed: number;

  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  return speed;
}
console.log(
  moveAnimal({
    type: "bird",
    flyingSpeed: 1000,
  })
);

console.log(
  moveAnimal({
    type: "horse",
    runningSpeed: 200,
  })
);

//Type Casting
//! - said is not a null
// as HTMLInputElement; Type Casting

// const userInputElement = <HTMLInputElement>document.getElementById("input")!;
const userInputElement = document.getElementById("input")! as HTMLInputElement;

userInputElement.value = "Hi!";

// index properties

interface ErrorContainer {
  // email: invalid email, password: invalid password etc.
  [anyKey: string]: string;
}

const errorContainer: ErrorContainer = {
  email: "invalid email",
  password: "invalid email",
};
