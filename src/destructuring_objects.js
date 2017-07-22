let person = {
    firstname: 'Bob',
    lastname: 'Dikens'
}

// let {firstname, lastname} = person;
// console.log(firstname, lastname);  // Bob Dikens

// let {firstname: first, lastname: last} = person;
// console.log(first, last);       // Bob Dikens

// let {firstname, lastname, age=25} = person;
// console.log(firstname, lastname, age); // Bob Dikens 25

let users = {
    firstname: 'Bob',
    lastname: 'Doe',
    social: {
        facebook: 'BobDo',
        twitter: 'bobdoe'
    }
}

// let {firstname, social: {facebook}, lastname} = users;
// console.log(firstname, lastname, facebook); // Bob Doe BobDo


function post(url, {data: {firstname, lastname}, cashe}) {
    console.log(firstname, lastname, cashe);  // Bob Doe false
}
post('api/users', {data: users, cashe: false});


function getUserInfo() {
    return {
        firstname: 'Bob',
        lastname: 'Doe',
        social: {
            facebook: 'BobDo',
            twitter: 'bobdoe'
        }
    };
}

let {firstname, lastname, social: {twitter}} = getUserInfo();
console.log(firstname, lastname, twitter);  // Bob Doe bobdoe