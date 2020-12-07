'use strict';
let num = 20;


function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage('Hello2');
console.log(num);

// function calc(a, b) {
//     return (a + b); 
// }

// console.log(calc(41, 321));

function ret() {
    let num = 50;
    return num;
}

const another = ret();
console.log(another);

 
const loger = function() {
    console.log("Hello!");
};

loger();

const calc = (a, b) => {
    console.log(1);
    return  a + b;
};
