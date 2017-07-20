'use strict';

function greet() {
    var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'friend';

    return greeting + ' ' + name;
}

console.log(greet()); // Hello friend
console.log(greet('Hi')); // Hi friend
console.log(greet(undefined, 'Sam')); // Hello Sam


function sum() {
    var sum = 0;

    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    values.forEach(function (value) {
        sum += value;
    });

    var sum2 = values.reduce(function (prevValue, currentValue) {
        return prevValue + currentValue;
    });

    return sum + ' ' + sum2; // 19, 19
}

console.log(sum(3, 4, 5, 7));