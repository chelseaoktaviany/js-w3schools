// any changes will also change person, because x and person are the same object
const city = {
    name: "San Francisco",
    province: "CA",
    country: "USA"
};

const x = city;
x.country = "US";

console.log(x);