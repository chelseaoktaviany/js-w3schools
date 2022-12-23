//switch cases use strict comparison (===)
let x = "0";
let text;

switch(x) {
    case 0:
        text = "Off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "No value found";
}

console.log(text);  //No value found