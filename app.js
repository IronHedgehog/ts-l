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
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Artem",
    age: 23,
    hobbies: ["Sport", "Cooking"],
    role: Role.ADMIN,
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
if (person.role === Role.ADMIN) {
    console.log("is admin");
}
