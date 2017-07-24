function *generator() {
    console.log('Start');
    yield;
    console.log('Finish');
}

let iterator = generator();

iterator.next();  // Start
iterator.next();  // Fish


let numbers = {
    *range(start, end) {
        let current = start;
        while (current <= end) {
            yield current++;
        }
    }
}


for (let num of numbers.range(1, 10)) {
    console.log(num);
}