//using math.max() on an array
//you can use Math.max.apply to find the highest number in an array

const points = [40, 100, 1, 5, 25, 10];

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

console.log(myArrayMax(points)); //100 is the highest number in an array

//using math.min() on an array
const points2 = [40, 100, 1, 5, 25, 10];

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}

console.log(myArrayMin(points2)); //1