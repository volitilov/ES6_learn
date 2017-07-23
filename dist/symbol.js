'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var symbol = Symbol('name');
var symbol2 = Symbol('name');

console.log(symbol); // Symbol(name)
console.log(symbol2); // Symbol(name)
console.log(symbol === symbol2); // false


var symbol3 = Symbol.for('ex');
var symbol4 = Symbol.for('ex');
var key = Symbol.keyFor(symbol3);

console.log(symbol3 === symbol4); // true
console.log(key); // ex

var password = Symbol();

var user = _defineProperty({
    username: 'Bob'
}, password, '5327236');

console.log(Object.getOwnPropertySymbols(user)); // [Symbol()]