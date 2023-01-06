// we can call Symbol.iterator manually

// create an object
myNumbers = {};

// make it iterable
myNumbers[Symbol.iterator] = function() {
    let n = 0;
    done = false;
    return {
        next() {
            n += 10;
            if (n == 100) {done = true}
            return {value:n, done:done};
        }
    };
}

// create an iterator
let iterator = myNumbers[Symbol.iterator]();

let text = "";
while (true) {
    const result = iterator.next();
    if (result.done) break;
    text += result.value + "\n";
}

// displaying an output
console.log(text);