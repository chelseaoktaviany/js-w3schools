// the match() method returns an array containing the results of matching a string against a string (or a regular expression).

let text = "The rain in SPAIN stays mainly in the plain";

//perform a search for "ain"
let match1 = text.match("ain");
console.log(match1.length + " " + match1); // the output is 1 ain

//perform a search for "ain":
let match2 = text.match(/ain/);
console.log(match2.length + " " + match2); // the output is 1 ain

//perform a global search for "ain":
let match3 = text.match(/ain/g);
console.log(match3.length + " " + match3);
// the output is 3 ain, ain, ain

//perform a global, case-insensitive search for "ain":
let match4 = text.match(/ain/gi);
console.log(match4.length + " " + match4); // the output is 4 ain, AIN, ain, ain
