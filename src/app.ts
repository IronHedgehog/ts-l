class Department {
  // private id: string;
  // public name: string; // all variables public by default
  private employees: string[] = [];
  // readonly - access modifier - blocked update value
  constructor(private readonly id: string, public name: string) {
    // short init constructor variables
    // this.name = name;
    // this.id = id;
  }

  describe(this: Department) {
    // this.id = "21"; ERROR (ID - readonly property)
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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT"); // super must be first
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReports(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("sd", []);

it.addEmployee("Max");
it.addEmployee("Petro");

// somethingDepartment.employees[2] = "Ann"; ERROR because of employees private field
it.printEmployeeInfo();

it.describe();

console.log(it);

const AccDepartment = new AccountingDepartment("d2", []);
AccDepartment.addReports("this code is so cool xD");
AccDepartment.printReports();

// const copyOfSomethingDepartment = { describe: somethingDepartment.describe }; ERROR because need Department class signature
// const copyOfSomethingDepartment = {
//   name: "SomethingDepartmentCopy",
//   describe: somethingDepartment.describe,
// };

// copyOfSomethingDepartment.describe();
