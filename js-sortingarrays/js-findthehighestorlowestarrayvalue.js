//find the highest (or lowest) array value

//sorting ascending
const points = [40, 100, 1, 5, 25, 10];


points.sort(function(a, b){return a - b});

// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value

console.log(points); //[ 1, 5, 10, 25, 40, 100 ]

//sorting descending
const points2 = [40, 100, 1, 5, 25, 10];
points2.sort(function(a, b) {return b - a});
console.log(points2); //[ 100, 40, 25, 10, 5, 1 ]