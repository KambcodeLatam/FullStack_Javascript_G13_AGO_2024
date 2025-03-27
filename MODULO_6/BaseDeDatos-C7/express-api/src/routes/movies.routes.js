const { Router } = require('express');

const { sequelize } = require('../db/sequelize');

const router = Router();


router.get('/movies', async (request, response) => {

    try {
        const movies = await sequelize.query(`
            SELECT * FROM movies;
        `, {
            type: sequelize.QueryTypes.SELECT,
        });

        console.log(movies);
        response.send(movies);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({msg: 'Internal Server Error'});
    }
   
});

router.get('/movies/:id', async (req, res) => {

    try {
        const id = parseInt(req.params.id);

        const [movie] = await sequelize.query(`
            SELECT * FROM movies
            WHERE id = :id;
        `, {
            replacements: {id},
            type: sequelize.QueryTypes.SELECT,
        });

        console.log(movie);

        if (!movie) return res.status(400).json({msg: 'Movie not found'});

        res.json(movie);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({msg: 'Internal Server Error'});
    }
    
});

router.post('/movies', async (req, res) => {

    try {
        const { title, genre, releaseYear } = req.body;

        if (!title || !genre ) 
            return res.status(400).json({msg: 'All fields are required'});

        const [results] = await sequelize.query(`
            INSERT INTO movies (title, genre, releaseyear)
            VALUES (:title, :genre, :releaseYear)
            RETURNING *
        `, {
            type: sequelize.QueryTypes.INSERT,
            replacements: {title, genre, releaseYear }
        });

        console.log(results);
        
        res.status(201).json(results[0]);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({msg: 'Internal Server Error'});
    }

    
});

router.put('/movies/:movieId', async (req, res) => {

    try {
        const movieId = Number(req.params.movieId);

        const { genre, releaseYear, title} = req.body;

        const [results] = await sequelize.query(`
            UPDATE movies
            SET title = :title,
                genre = :genre,
                releaseYear= :releaseYear
            WHERE id = :movieId
            RETURNING *;
        `, {
            replacements: {movieId, genre, releaseYear, title},
            type: sequelize.QueryTypes.UPDATE,
        })


        if (!results.length) return res.status(400).json({ msg: 'Movie not found'});
        res.json(results[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg: 'Internal Server Error'});
    }

});

router.delete('/movies/:movieId', async (req, res) => {

    try {
        const movieId = Number(req.params.movieId);

        const results = await sequelize.query(`
            DELETE FROM movies
            WHERE id = :movieId
            RETURNING *;
        `, {
            replacements: { movieId },
            type: sequelize.QueryTypes.DELETE,
        })

        console.log(results);

        if (!results.length) return res.status(400).json({ msg: 'Movie not found'});
        res.json(results[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({msg: 'Internal Server Error'});
    }

});

module.exports = router;