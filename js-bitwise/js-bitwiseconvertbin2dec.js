console.log("Binary 101 is converted to decimal " +  bin2dec(101)); // 5

function bin2dec(bin) {
    return parseInt(bin, 2).toString(10);
}