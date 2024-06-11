// unknown

// if you wont type any, type unknown (need type checking)
let userInput: unknown;
let userName: string;

userInput = 14;
userInput = "User";
// type checking
if (typeof userInput === "string") {
  userName = userInput;
}

//never
// never - something what stop you script(infinity loop, throws error etc)
function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

// generateError("something went wrong", 500);
