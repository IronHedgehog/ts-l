// unknown
// if you wont type any, type unknown (need type checking)
var userInput;
var userName;
userInput = 14;
userInput = "User";
// type checking
if (typeof userInput === "string") {
    userName = userInput;
}
//never
// never - something what stop you script(infinity loop, throws error etc)
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("something went wrong", 500);
