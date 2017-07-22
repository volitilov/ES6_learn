'use strict';

var add = function add(x, y) {
    return x + y;
};
console.log(add(5, 6)); // 11


var square = function square(x) {
    return x * x;
};
console.log(square(5)); // 25


var giveMeAnswer = function giveMeAnswer() {
    return 42;
};
console.log(giveMeAnswer()); // 42


var multiply = function multiply(x, y) {
    var sum = x + y;
    return sum;
};
console.log(multiply(10, 35)); // 45


var getPerson = function getPerson() {
    return { name: 'Bob' };
};
console.log(getPerson()); // Object {name: 'Bob'}


(function () {
    return console.log('IIFE');
})(); // IIFE


var numbers = [2, 3, 1, 4, 7, 9];
var sum = 0;
var squared = numbers.map(function (n) {
    return n * n;
});
console.log(squared); // [4, 9, 1, 16, 49, 81]
numbers.forEach(function (num) {
    return sum += num;
});
console.log(sum); // 26


var person = {
    name: 'Bob',
    greet: function greet() {
        var _this = this;

        setTimeout(function () {
            console.log('Hello ' + _this.name);
            console.log(_this);
        }, 2000);
    }
};
person.greet();