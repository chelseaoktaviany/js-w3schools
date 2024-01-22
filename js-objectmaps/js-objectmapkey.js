// create objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// create a map
const fruits = new Map();

// add new elements to the map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

// getting the apples element from a map
console.log(fruits.get(apples)); // 500