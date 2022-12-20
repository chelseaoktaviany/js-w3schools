//dates can easily be compared

//the following example compares today's date with january 14, 2100
let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
    text = "Today is before January 14, 2100.";
} else {
    text = "Today is after January 14, 2100.";
}

console.log(text); //Today is before January 14, 2100