const NumberOfFilms = +prompt("сколько фильмов ты посмотрел?", "")

const PersonalMoviesBD = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

}

const a = prompt("название фильма?", ""),
        b = prompt("актер?", ""),
        c = prompt("оценка фильма?", ""),
        d = prompt("оценка актера?", "");


PersonalMoviesBD.actors = a;
PersonalMoviesBD.genres = b;
PersonalMoviesBD.movies[a] = c;
PersonalMoviesBD.movies[b] = d;

console.log(PersonalMoviesBD);