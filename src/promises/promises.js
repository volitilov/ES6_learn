function applyForVisa(documents) {
    console.log('Обработка заявления...');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > .5 ?  resolve({}) : reject('В визе отказано: не хвотило документов...');
        }, 2000);
    });
    return promise;
}

function getVisa(visa) {
    console.info('Виза получена');
    return Promise.resolve(visa);
}

function bookHotel(visa) {
    console.log(visa);
    console.log('Бронируем отель...');
    return new Promise(function(resolve, reject){
         Math.random() > .5 ? resolve('Отель забронирован.') : reject('Больше нет мест.');
    });
}

function buyTickets(booking) {
    console.log('Бронь: ', booking);
    console.log('Покупаем билет...');
}

applyForVisa({})
    .then(getVisa)
    .then(bookHotel)
    .then(buyTickets)
    .catch(reason => console.error(reason));