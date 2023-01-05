// this example uses a lang property to set the value of the language property
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
        this.language = lang;
    }
};

// set an object property using a setter:
person.lang = "en";

// display data from the object:
console.log(person.language); //en