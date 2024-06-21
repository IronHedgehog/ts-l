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
