function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRndInteger(0, 10));


function getRndInteger2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRndInteger2(0, 10));