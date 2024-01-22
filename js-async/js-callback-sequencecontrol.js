//you could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:
function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(15, 2);
myDisplayer(result);
