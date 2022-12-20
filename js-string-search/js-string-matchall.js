/**
 *
 * JavaScript String matchAll()
 * The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
 *
 *
 */

let text = "I love Cats. Cats are very easy to love. Cats are very popular.";
const iterator = text.matchAll("Cats");

console.log(Array.from(iterator)); //Cats Cats Cats

// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
const iterator2 = text.matchAll(/Cats/g);
console.log(Array.from(iterator2)); //Cats Cats

//if you want to search case insensitive, the insensitive flag (i) must be set
const iterator3 = text.matchAll(/Cats/gi);
console.log(Array.from(iterator3)); //cats, Cats, Cats
