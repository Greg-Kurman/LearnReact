"use strict";

let NumberOfFilms = {
    genres: []
}


function start() {
    for (let i = 1; i <= 3; i++) {
        NumberOfFilms.genres[i - 1] = prompt(`Какой жанр нравится, вопрос под номерном ${i}`);
    }

}

start()

console.log(NumberOfFilms)














if (4 == 9) {
    console.log("ok!");
} else {
    console.log("error");
}
const num = 50;

if (num < 49) {
    console.log("error")
} else if (num > 100) {
    console.log("error")
} else {
    console.log("ok!")
}

(num == 50) ? console.log("ok"): console.log("error");


const lol = '19';


switch (lol) {
    case '20':
        console.log("error")
        break;
    case '192':
        console.log('ok')
        break;
    default:
        console.log("not eat");
}


for (let i = 0; i < 2; i++) {
    console.log("god");
}


const expression = function (a, b) {
    return console.log(a + b);
}

expression(2, 6)




declaration(4, 5)

function declaration(d, g) {
    y = d + g
    console.log(y);
}


const calc = (a, b) => {
    return a + b
}

console.log(calc(2, 6))




const test = "test text ";

console.log(test.slice(4, 9))


const nump = 12.2;
console.log(Math.round(nump))