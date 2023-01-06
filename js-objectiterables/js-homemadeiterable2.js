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

let text = "";
for (const num of myNumbers) {
    text += num + " "
}

// displaying the output
console.log(text); // 10 20 30 40 50 60 70 80 90