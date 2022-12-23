// bracket are used to find a range of characters:

// [abc]
let text = "Is this all there is?";
let result = text.match(/[h]/g);
console.log(result);    // ['h', 'h']

// [0-9]
let text2 = "123456789";
let result2 = text2.match(/[1-4]/g);
console.log(result2); // ['1','2','3','4']

// (x|y)
let text3 = "re, green, red, green, gren, gr, blue, yellow";
let result3 = text3.match(/(red|green)/g);

console.log(result3); // ['green', 'red', 'green']


// metacharacters are characters with a special meaning

// \d
let text4 = "Give 100%!";
let result4 = text4.match(/\d/g);
console.log(result4); // ['1','0','0']

// \s
let text5 = "Is this all there is?";
let result5 = text5.match(/\s/g);
console.log(result5); // ['','','','']

// b
let text6 = "HELLO, LOOK AT YOU!";
let result6 = text6.search(/\bLO/);
console.log("Found in position: " + result6);   // Found in position: 7

let result7 = text6.search(/LO\b/);
console.log("Found in position: " + result7); // Found in position: 3

// \uxxxx
let text7 = "Visit W3Schools. Hello World!";
let result8 = text7.match(/\u0057/g);

console.log(result8); //['W', 'W']

// quantifiers define quantities

// n+
let text8 = "Hellooo World! Hello W3Schools!";
let result9 = text8.match(/o+/g);
console.log(result9); //['ooo', 'o', 'o', 'oo']

// n*
let result10 = text8.match(/lo*/g);
console.log(result10); //['l','looo','l','l','lo','l']

// n?
let text10 = "1, 100, or 1000?";
let result11 = text10.match(/10?/g);
console.log(result11); // ['1','10','10']