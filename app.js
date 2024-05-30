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
var ADMIN = 0;
var READ_ONLY = 1;
var AUTHOR = 2;
var person = {
    name: "Artem",
    age: 23,
    hobbies: ["Sport", "Cooking"],
    role: ADMIN,
};
var favoriteActives;
favoriteActives = ["something"];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
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
var product = {
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
