//html templates
let header = "Templates literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;

console.log(html); //<h2>Templates literals</h2><ul><li>template literals</li><li>javascript</li><li>es6</li></ul>
