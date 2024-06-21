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

type combine = string | number;
type numeric = number | boolean;

type universalType = combine | numeric;
