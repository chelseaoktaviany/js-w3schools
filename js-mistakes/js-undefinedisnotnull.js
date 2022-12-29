// to test if an object does not exist, test if the type is undefined:
console.log((typeof myObj === "undefined"));    // true

// if you want to test if an object is not null, you must test if it not undefined first
console.log((typeof myObj !== "undefined" && myObj !== null));  // false