// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // Tuple - fixed length array
// } = {
//   name: "Artem",
//   age: 23,
//   hobbies: ["Sport", "Cooking"],
//   role: [1, "author"],
// };

//person.role.push("admin"); // Exception
// person.role[1] = 10; // Error

//person.role = [10, "a", "aasd"]; // Error

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const person = {
  name: "Artem",
  age: 23,
  hobbies: ["Sport", "Cooking"],
  role: ADMIN,
};

let favoriteActives: string[];
favoriteActives = ["something"];

for (const hobby of person.hobbies) {
  console.log(hobby.toLowerCase());
  // console.log(hobby.map()); // ERROR
}
console.log(person.age);

// NESTED OBJECTS
// {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   }
// }
const product = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

if (person.role === ADMIN) {
  console.log("is admin");
}
