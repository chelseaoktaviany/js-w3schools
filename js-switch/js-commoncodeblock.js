// sometimes you want different switch cases to use the same code

let today = new Date().getDay();
let text;
switch (today) {
    case 4:
    case 5:
        text = "Soon it is Weekend";
        break;
    case 0:
    case 6:
        text = "It is Weekend";
        break;
    default:
        text = "Looking forward to the Weekend";
}

console.log(text);  //looking forward to the Weekend