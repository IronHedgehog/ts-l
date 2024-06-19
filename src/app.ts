class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: ${this.name}`);
  }
}

const somethingDepartment = new Department("somethingDepartment");
somethingDepartment.describe();

// const copyOfSomethingDepartment = { describe: somethingDepartment.describe }; ERROR because need Department class signature
const copyOfSomethingDepartment = {
  name: "SomethingDepartmentCopy",
  describe: somethingDepartment.describe,
};

copyOfSomethingDepartment.describe();
