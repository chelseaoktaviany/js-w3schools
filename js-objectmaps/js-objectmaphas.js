// the has() method returns true if a key exists in a map:
fruits = new Map([
    ['apples', 500],
    ['bananas', 300],
    ['oranges', 200]
]);

fruits.has("apples");

// removing "apples" element from the map
fruits.delete("apples");

console.log(fruits.has("apples")); // false