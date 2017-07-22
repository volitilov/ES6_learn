let [js, php, ...rest] = ['JavaScript', 'PHP', 'Python', 'Ruby'];
console.log(js, php, rest);  // JavaScript, PHP, ["Python", "Ruby"]

let [first, [lastOne, lastTwo]] = [1, [2, 3]];
console.log(first, lastOne, lastTwo);  // 1, 2, 3

let [a, b, c=3] = [1, 2];
console.log(a, b, c);  // 1, 2, 3

function add([a, b]) {
    return a + b;
};
console.log(add([5, 7]));  // 12 
