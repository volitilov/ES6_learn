function hello(name) {
    return `Hello ${name}`;
}

console.log(hello('Sam'));

function message(to, from, subject, text) {
    return (`
        to: ${to}
        form: ${from}
        subject: ${subject}
        text: ${text}
    `)
}

console.log(message('bob@mail.ru', 'sam@mail.ru', 'hello', 'How are you doing?'));