class Department {
  // private id: string;
  // public name: string; // all variables public by default
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // short init constructor variables
    // this.name = name;
    // this.id = id;
  }

  describe(this: Department) {
    console.log(`Department:(${this.id}) ${this.name}`);
  }

  addEmployee(employee: string) {
    // add validation
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const somethingDepartment = new Department("sd", "somethingDepartment");

somethingDepartment.addEmployee("Max");
somethingDepartment.addEmployee("Petro");

// somethingDepartment.employees[2] = "Ann"; ERROR because of employees private field
somethingDepartment.printEmployeeInfo();

somethingDepartment.describe();

// const copyOfSomethingDepartment = { describe: somethingDepartment.describe }; ERROR because need Department class signature
// const copyOfSomethingDepartment = {
//   name: "SomethingDepartmentCopy",
//   describe: somethingDepartment.describe,
// };

// copyOfSomethingDepartment.describe();
