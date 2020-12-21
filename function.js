'use strict';
// let num = 20;


// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage('Hello2');
// console.log(num);

// // function calc(a, b) {
// //     return (a + b); 
// // }

// // console.log(calc(41, 321));

// function ret() {
//     let num = 50;
//     return num;
// }

// const another = ret();
// console.log(another);

 
// const loger = function() {
//     console.log("Hello!");
// };

// loger();

// const calc = (a, b) => {
//     console.log(1);
//     return  a + b;
// };

// const str = "teSt";

// console.log(str.toLowerCase());
// console.log(str);

// const fruit = "Some fruit";

// console.log(fruit.indexOf("q"));

// const logg = "Hello world";

// // console.log(logg.slice(6,11));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));

// const num = 12.2;

// console.log(Math.round(num));

// const test = "12.2px";

// console.log(parseInt(test));
// console.log(parseFloat(test));

// function first() {
//     // Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     privat: true,
//     genre: ['action', 'comedy', 'triller'],
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(bg);


// // console.log(Object.keys(options).length);

// // console.log(options['colors']['bg']);
 
// // delete options.name;
// // console.log(options.name);
// // let counter = 0;

// // for (let key in options) {
// //     if (typeof(options[key]) === 'object') {
// //         for (let i in options[key]) {
// //             console.log(`Свойство: ${i} имеет значение ${options[key][i]}`);
// //             // counter++;
// //         }
// //     } else {
// //         console.log(`Свойство: ${key} имеет значение ${options[key]}`);
// //         counter++;
// //     }

// // }
// // console.log(counter);


//  МАССИВЫ

// const arr = [88, 13, 21, 34, 6, 8];
// arr.sort(compreNum);
// console.log(arr);

// function compreNum(a, b) {
//     return a - b;
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));
// arr.pop();
// arr.push(10);
// // arr.shift()

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let  value of arr) {
//     console.log(value);
// }

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Ссылка

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy (mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// // }

// const numbers = {
//     a: 2, 
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// // const newNumbers = copy(numbers);
// // newNumbers.a = 10;
// // newNumbers.c.x = 10;

// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(clone);
// console.log(add);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'sdasda';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];
// log(...num);

// const array = ["a", "b"];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// newObj.one = 3;

// console.log(q);
// console.log(newObj);

// Объектно ориентированное программирование

let str = "some";
let strObj = new String(str);


// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

// const john = {
//     health: 100
// };

const john = Object.create(soldier);

// john.__proto__  = soldier;

// Object.setPrototypeOf(john, soldier);

john.sayHello();