const names: Array<string> = [""]; // Array<string> ===  string[], arrays of strings

const promise: Promise<number> = new Promise((res, rej) => {
  setTimeout(() => {
    res(10);
  }, 2000);
});

promise.then((res) => {
  // console.log(res.join()); ERROR because of our generic say result of this promise its number
  console.log(res.toFixed(2));
});
