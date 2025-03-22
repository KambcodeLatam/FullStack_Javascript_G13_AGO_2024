const express = require('express')
const app = express();

const { movies } = require('./data');

const port = 3000;
// REST API

app.use(express.json());

app.get('/', (request, response) => {
    response.send('Response');
});

app.get('/movies', (request, response) => {
    response.send(movies);
});

app.get('/movies/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const movie = movies.find(m => m.id === id);

    if (!movie) return res.status(400).json({msg: 'Movie not found'});

    res.json(movie);
});

app.post('/movies', (req, res) => {

    const { title, genre } = req.body;

    if (!title || !genre ) 
        return res.status(400).json({msg: 'All fields are required'});

    const newMovie = {
        ...req.body,
        id: movies[movies.length -1].id + 1,
    }
    
    movies.push(newMovie);
    res.status(201).json(newMovie);
});

app.put('/movies/:movieId', (req, res) => {

    const movieId = Number(req.params.movieId);

    console.log(movieId);
    console.log(req.body);

    const movie = movies.find(m => m.id === movieId);

    if (!movie) return res.status(400).json({ msg: 'Movie not found'});

    movie.title = req.body.title ?? movie.title;
    movie.genre = req.body.genre ?? movie.genre;
    movie.releaseYear = req.body.releaseYear ?? movie.releaseYear;
    movie.directorId = req.body.directorId ?? movie.directorId;

    res.json(movie);


});

app.delete('/movies/:movieId',  (req, res) => {

    const movieId = Number(req.params.movieId);

    const movieIndex = movies.findIndex(m => m.id === movieId);

    if (movieIndex === -1 ){
        return res.status(400).json({msg: 'Movie Not Found'});
    }

    const [movie] = movies.splice(movieIndex, 1);

    res.json(movie);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});