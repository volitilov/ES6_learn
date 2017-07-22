let add = (x, y) => x + y;
console.log(add(5, 6));     // 11


let square = x => x * x;
console.log(square(5));     // 25


let giveMeAnswer = () => 42;
console.log(giveMeAnswer());  // 42


let multiply = (x, y) => {
    let sum = x + y;
    return sum;
}
console.log(multiply(10, 35));  // 45


let getPerson = () => ({ name: 'Bob' });
console.log(getPerson());   // Object {name: 'Bob'}


( () => console.log('IIFE') )();    // IIFE


let numbers = [2, 3, 1, 4, 7, 9];
let sum = 0;
let squared = numbers.map( n => n * n );
console.log(squared);   // [4, 9, 1, 16, 49, 81]
numbers.forEach( num => sum += num );
console.log(sum);       // 26


let person = {
    name: 'Bob',
    greet: function() {
        setTimeout(() => {
            console.log(`Hello ${this.name}`);
            console.log(this);
        }, 2000);
    }
}
person.greet();