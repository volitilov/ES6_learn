'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firstName = 'Bob',
    lastName = 'Adson',
    email = 'bob@mail.com';

var person = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    sayHello: function sayHello() {
        return 'Hello ' + this.firstName + ' ' + this.lastName;
    },

    // к fullName теперь мы можем обращаться как к обычному
    // свойству пример: person.fullname
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },

    set newName(value) {
        this.firstName = value;
    }
};

console.log(person.sayHello());

function createCar(property, value) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, property, value), _defineProperty(_ref, '_' + property, value), _defineProperty(_ref, property.toUpperCase(), value), _defineProperty(_ref, 'get' + property.toUpperCase(), function () {
        // getVIN
        return this[property];
    }), _ref;
}

console.log(createCar('vin', 123));