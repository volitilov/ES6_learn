'use strict';

var staticLanguages = ['C', 'C++', 'Java'];
var denamicLanguages = ['JavaScript', 'PHP', 'Ruby'];

var languages = [].concat(staticLanguages, ['Python', 'C#'], denamicLanguages);

console.log(languages); // ["C", "C++", "Java", "Python", "C#", "JavaScript", "PHP", "Ruby"]

function sum(a, b, c) {
    return a + b + c;
}

var mas = [2, 5, 7];

console.log(sum.apply(undefined, mas)); // 14