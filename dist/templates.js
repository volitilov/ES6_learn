'use strict';

function hello(name) {
    return 'Hello ' + name;
}

console.log(hello('Sam'));

function message(to, from, subject, text) {
    return '\n        to: ' + to + '\n        form: ' + from + '\n        subject: ' + subject + '\n        text: ' + text + '\n    ';
}

console.log(message('bob@mail.ru', 'sam@mail.ru', 'hello', 'How are you doing?'));