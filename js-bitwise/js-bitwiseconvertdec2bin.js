console.log("decimal 5 is converted to binary " + dec2bin(-5)); // 11111111111111111111111111111011

// converting decimal to binary
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}