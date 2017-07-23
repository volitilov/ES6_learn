let movieList = document.querySelector('#movies');

function addMovieToList(movie) {
    let img = document.createElement('img');
    img.src = movie.Poster;
    movieList.appendChild(img);
}

function getData(url) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onload = function() {
            if (xhr.status == 200) {
                let json = JSON.parse(xhr.response);
                resolve(json.Search);
            } else {
                reject(xhr.statusText);
            }
        };

        xhr.onerror = function() {
            reject(error);
        };

        xhr.send();
    });
}

let search = 'batman';

getData(`http://img.omdbapi.com/?i=tt3896198&h=600&apikey=8d95177b&t=${search}`)
    .then(movies =>
        movies.forEach(movie => 
            addMovieToList(movie)))
    .catch(error => console.log(error));