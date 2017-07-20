function greet(greeting='Hello', name='friend') {
    return `${greeting} ${name}`;
}

console.log(greet()); // Hello friend
console.log(greet('Hi')); // Hi friend
console.log(greet(undefined, 'Sam')); // Hello Sam


function sum(...values) {
    let sum = 0;
    values.forEach(function(value) {
        sum += value;
    });

    let sum2 = values.reduce(function(prevValue, currentValue) {
        return prevValue + currentValue;
    });
    
    return `${sum} ${sum2}`; // 19, 19
}

console.log(sum(3, 4, 5, 7));