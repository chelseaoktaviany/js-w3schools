// Instead of using a variable to store the return value of a function:
//   let x = toCelsius(77);
//   let text = "The temperature is " + x + " Celsius";

// Using the function directly, as a variable value:
let text = "The temperature is " + toCelsius(77) + " Celsius";

//getting the result:
console.log(text);

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
