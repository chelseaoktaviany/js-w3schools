//sorting an array in random order

//1. declaring an array
const points = [40, 100, 1, 5, 25, 10];

//2. using random order to sort points
points.sort(function(){return 0.5 - Math.random()});

//3. result
console.log(points); //random