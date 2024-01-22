// when you pass a function as an argument, remember not to use parenthesis

// create an array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}

// call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

console.log(posNumbers);
