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



let kek = function () {
    return setTimeout(function () {
        console.log("kek")
    }, 500)
}


let kek2 = function () {
    return console.log("kek2")
}

kek()
kek2()



function learnJS(lang, callback) {
    setTimeout(function () {
        console.log(`${lang}`)
    }, 5000)
    callback()
};

learnJS("english", function () {
    console.log("it's callback")
})





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


const website = {
    name: 'good',
    width: 1024,
    hight: 1024,
    border: {
        bg: 'red',
        fr: 'dotted'

    },
    makeTest: function () {
        console.log("test")
    }
}

website.makeTest()
console.log(Object.keys(website).length)


for (let key in website) {
    if (typeof (website[key]) === 'object') {
        for (let i in website[key]) {
            console.log(`свойство ${i}`, `имеет значение ${website[key][i]}`)
        }

    } else {
        console.log(`свойство ${key}`, `имеет значение ${website[key]}`)
    }

}


const arr = [2, 4, 5, 6, 7]

arr.forEach(function(item, i , arr){
        console.log(`позиция ${i+1} в ней значение ${ item} в массиве${arr}`)
})


for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}