let firstName = 'Bob',
    lastName = 'Adson',
    email = 'bob@mail.com';

let person = {
    firstName,
    lastName,
    email,
    sayHello() {
        return `Hello ${this.firstName} ${this.lastName}`;
    },
    // к fullName теперь мы можем обращаться как к обычному
    // свойству пример: person.fullname
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },

    set newName(value) {
        this.firstName = value;
    }
}

console.log(person.sayHello());


function createCar(property, value) {
    return {
        [property]: value,                  // vin 123
        ['_' + property]: value,            // _vin 123
        [property.toUpperCase()]: value,     // VIN 123
        ['get' + property.toUpperCase()]() {    // getVIN
            return this[property];
        }
    }
}

console.log(createCar('vin', 123));