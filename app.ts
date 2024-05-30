// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "Artem",
  age: 23,
  hobbies: ["Sport", "Cooking"],
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
