"use strict";

if (4 == 9) {
    console.log("ok!");
} else {
    console.log("error");
}
const num = 50;

if(num < 49){
    console.log("error")
} else if (num > 100) {
    console.log("error")
} else {
    console.log("ok!")
}

(num == 50)? console.log("ok") : console.log("error");


const lol = '19';


switch(lol) {
    case '20':
        console.log("error")
        break;
    case '192':
        console.log('ok')
        break;
    default:
        console.log( "not eat");
}