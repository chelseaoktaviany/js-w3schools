// the search() method searches a string for a string (or a regular expression) and returns the position of the match:
let str1 = "Please locate where 'locate' occurs!";
console.log(str1.search("locate")); // the output is 7

let str2 = "Please locate where 'locate' occurs!";
console.log(str2.search(/locate/));
// the output is 7
