let symbol = Symbol('name');
let symbol2 = Symbol('name');

console.log(symbol);  // Symbol(name)
console.log(symbol2);  // Symbol(name)
console.log(symbol === symbol2);  // false


let symbol3 = Symbol.for('ex');
let symbol4 = Symbol.for('ex');
let key = Symbol.keyFor(symbol3);

console.log(symbol3 === symbol4);  // true
console.log(key)  // ex

let password = Symbol();

let user = {
    username: 'Bob',
    [password]: '5327236'
}

console.log(Object.getOwnPropertySymbols(user)); // [Symbol()]