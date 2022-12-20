//find max method
const points = [40, 100, 1, 5, 25, 10];

function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
        if(arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}

function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}

console.log(myArrayMax(points)); //100
console.log(myArrayMin(points)); //1