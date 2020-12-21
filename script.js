'use strict';


//  function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
//     }
//  } 

//  personalMovieDB.start();

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    },
    remembeMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", ''),
                  b = prompt("На сколько оцените фильм?", '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count > 0 && personalMovieDB.count < 10 ) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            // let x = prompt(`Ваш любимый жанр под номером - ${i}?`);
            // if (x != null && x != '') {
            // personalMovieDB.genres[i - 1] = x;
            // } else {
            //     console.log("Вы ввыели неверно значение");
            //     i--;
            let x = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
            if (x != null && x != '') {
            personalMovieDB.genres = x.split(", ");
            personalMovieDB.genres.sort();
            } else {
                console.log("Вы ввыели неверно значение");
                i--;
            }
            personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
        }
    }
};
// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// personalMovieDB.start();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();
// personalMovieDB.remembeMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.toggleVisibleMyDB();


// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером - ${i}?`);
//     }
// }


// function remembeMyFilms () {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("Один из последних просмотренных фильмов?", ''),
//               b = prompt("На сколько оцените фильм?", '');
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// remembeMyFilms();
// writeYourGenres();



// function detectPersonalLevel() {
//     if (personalMovieDB.count > 0 && personalMovieDB.count < 10 ) {
//         alert("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         alert("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         alert("Вы киноман");
//     } else {
//         alert("Произошла ошибка");
//     }
// }

// detectPersonalLevel();

// console.log(personalMovieDB);



