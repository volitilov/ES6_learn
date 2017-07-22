'use strict';

var person = {
    firstname: 'Bob',
    lastname: 'Dikens'

    // let {firstname, lastname} = person;
    // console.log(firstname, lastname);  // Bob Dikens

    // let {firstname: first, lastname: last} = person;
    // console.log(first, last);       // Bob Dikens

    // let {firstname, lastname, age=25} = person;
    // console.log(firstname, lastname, age); // Bob Dikens 25

};var users = {
    firstname: 'Bob',
    lastname: 'Doe',
    social: {
        facebook: 'BobDo',
        twitter: 'bobdoe'
    }

    // let {firstname, social: {facebook}, lastname} = users;
    // console.log(firstname, lastname, facebook); // Bob Doe BobDo


};function post(url, _ref) {
    var _ref$data = _ref.data,
        firstname = _ref$data.firstname,
        lastname = _ref$data.lastname,
        cashe = _ref.cashe;

    console.log(firstname, lastname, cashe); // Bob Doe false
}
post('api/users', { data: users, cashe: false });

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

var _getUserInfo = getUserInfo(),
    firstname = _getUserInfo.firstname,
    lastname = _getUserInfo.lastname,
    twitter = _getUserInfo.social.twitter;

console.log(firstname, lastname, twitter); // Bob Doe bobdoe