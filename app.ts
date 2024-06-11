// if you wont type any, type unknown (need type checking)
let userInput: unknown;
let userName: string;

userInput = 14;
userInput = "User";
// type checking
if (typeof userInput === "string") {
  userName = userInput;
}
