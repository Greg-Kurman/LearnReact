'use strict';

class User {
    constructor(name, age, height) {
        this.name = name;
        this._age = age;
        this._height = height;
    }

    

    say() {
        console.log(`Имя пользователя ${this.name} возраст ${this._age} рост ${this._height}`);
    }

    get height() {
        return this._height;
    }

    set height(height) {
        if (typeof height === 'number' && height > 0 && height < 300) {
            this._height = height;
        }
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 119) {
            this._age = age;
        } else {
            console.log('ошибка');
        }
    }
}


const Ivan = new User('Ivan', 23, 190);

Ivan.age = 30;

Ivan.height = 200;



Ivan.say();