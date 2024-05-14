let text =
  '{"employees": [' +
  '{ "firstName":"John", "lastName":"Doe"},' +
  '{ "firstName":"Anna", "lastName":"Smith"},' +
  '{ "firstName":"Peter", "lastName":"Jones"} ]}';

// using js built-in function JSON.parse() to convert the string into a JS object:
const obj = JSON.parse(text);

console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName); // Anna Smith
