'use strict';

function sum(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function mathOperation(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
}

var a = 2;
var b = 5;

console.log(mult(a, b))
console.log(mathOperation(a, b, '/'))