//the fisher yates method
/**
 * the above example, array.sort(), is not accurate. it will favor some numbers over the others.
 * 
 * the most popular correct method, is called the fisher yates shuffle, and was introduced in data science as early as 1938
 */

//in js the method can be translated to this:

//1. declaring an array
const points = [40, 100, 1, 5, 25, 10];

//2. using the fisher yates method in js
for (let i = points.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = points[1];
    points[i] = points[j];
    points[j] = k;
}

//3. result
console.log(points); //random