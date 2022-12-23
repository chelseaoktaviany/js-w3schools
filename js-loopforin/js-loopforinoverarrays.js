// the javascript for in statement can also loop over the properties of an array
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
    txt += numbers[x];
}

console.log(txt);   // 45491625