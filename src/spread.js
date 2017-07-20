let staticLanguages = ['C', 'C++', 'Java'];
let denamicLanguages = ['JavaScript', 'PHP', 'Ruby'];

let languages = [...staticLanguages, 'Python', 'C#', ...denamicLanguages];

console.log(languages); // ["C", "C++", "Java", "Python", "C#", "JavaScript", "PHP", "Ruby"]

function sum(a, b, c) {
    return a + b + c;
}

let mas = [2, 5, 7];

console.log(sum(...mas)); // 14