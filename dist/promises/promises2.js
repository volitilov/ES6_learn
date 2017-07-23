'use strict';

var movieList = document.querySelector('#movies');

function addMovieToList(movie) {
    var img = document.createElement('img');
    img.src = movie.Poster;
    movieList.appendChild(img);
}

function getData(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onload = function () {
            if (xhr.status == 200) {
                var json = JSON.parse(xhr.response);
                resolve(json.Search);
            } else {
                reject(xhr.statusText);
            }
        };

        xhr.onerror = function () {
            reject(error);
        };

        xhr.send();
    });
}

var search = 'batman';

getData('http://img.omdbapi.com/?i=tt3896198&h=600&apikey=8d95177b&t=' + search).then(function (movies) {
    return movies.forEach(function (movie) {
        return addMovieToList(movie);
    });
}).catch(function (error) {
    return console.log(error);
});