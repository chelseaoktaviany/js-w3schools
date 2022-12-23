// The loop in this example uses a for loop to collect the car names from the cars array:
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

for (;cars[i];) {
    text += cars[i];
    i++;
}
console.log(text);

// the loop in this example uses a while loop to collect the car names from the cars array:
// while (cars[i]) {
//     text += cars[i];
//     i++;
// }
// console.log(text);