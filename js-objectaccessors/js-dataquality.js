// create an object
const person = {
    firstName: 'John',
    lastName: 'Doe',
    language: "en",
    get lang() {
        return this.language.toUpperCase();
    }
};

// display data from the object using a getter:
console.log(person.lang); // EN

// example - display data from the object
const person2 = {
    firstName: 'John',
    lastName: 'Doe',
    language: '',
    set lang(lang) {
        this.language = lang.toUpperCase();
    }
};

person2.lang = "en";

console.log(person2.language); // EN