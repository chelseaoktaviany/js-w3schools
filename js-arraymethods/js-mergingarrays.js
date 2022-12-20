//the concat() method creates a new array by merging (concatenating) existing arrays

//merging two arrays
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren); //[ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]

//merging three arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren2 = arr1.concat(arr2, arr3);
console.log(myChildren2); //[ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin', 'Morgan' ]

//merging an array with values
const arr4 = ["Emil", "Tobias", "Linus"];
const myChildren3 = arr4.concat("Peter");
console.log(myChildren3); //[ 'Emil', 'Tobias', 'Linus', 'Peter' ]