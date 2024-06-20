class Department {
  // private id: string;
  // public name: string; // all variables public by default
  protected employees: string[] = [];
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
  private lastReport: string;

  public get mostRecentReport(): string {
    // public stay by default
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("Oh no, we have no reports");
  }

  public set mostRecentReport(text: string) {
    if (!text) {
      throw new Error("input valid value");
    }
    this.addReports(text);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[reports.length - 1];
  }

  addEmployee(name: string): void {
    if (name === "Artem") {
      return;
    }
    this.employees.push(name); // employees is undefined because it's private property(ERROR) ( A can take private variable only in class where A place it)

    // IF A wont to use this variable in this class a need change private status to protected(A can use protected values in inherited classes)
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
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

// AccDepartment.mostRecentReport; // getter throw error because no reports at this moment
AccDepartment.mostRecentReport = "another one report,nice xD";
AccDepartment.addReports("this code is so cool xD");
console.log(AccDepartment.mostRecentReport); // we have report. All ok xD.
AccDepartment.printReports();

AccDepartment.addEmployee("Artem");
AccDepartment.addEmployee("Max");
AccDepartment.printEmployeeInfo();

// const copyOfSomethingDepartment = { describe: somethingDepartment.describe }; ERROR because need Department class signature
// const copyOfSomethingDepartment = {
//   name: "SomethingDepartmentCopy",
//   describe: somethingDepartment.describe,
// };

// copyOfSomethingDepartment.describe();
