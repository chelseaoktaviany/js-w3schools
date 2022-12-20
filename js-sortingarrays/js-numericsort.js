//numeric sort

/**
 * 
 * However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1"
 * 
 * because of this, the sort() method will produce incorrect result when sorting numbers
 * 
 * 
 * to fix this by providing a compare function
 */

//for ascending sort
//1. declaring an array
const points = [40, 100, 1, 5, 25, 10];

//2. using a compare function to ascend numbers
points.sort(function(a, b) {
    return a - b
});

//3. getting the output as result
console.log(points); //[1, 5, 10, 25, 40, 100]

//for descending sort
//1. declaring an array
const points2 = [40, 100, 1, 5, 25, 10];

//2. using a compare function to ascend numbers
points2.sort(function(a, b) {
    return b - a
});

//3. getting the output as result
console.log(points2); //[100, 40, 25, 10, 5, 1]