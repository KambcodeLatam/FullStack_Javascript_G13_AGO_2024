import { Movie, Director } from '../models/index.js';
import { serverError } from '../helpers/http.js';

export class MovieController {
    
    getMovies  = async (request, response) => {
    
        try {
          const movies = await Movie.findAll();
          response.send(movies);
        } catch (error) {
          serverError(error.message, res);
        }
       
    };

    getMoviesByDirector = async (req, res) => {
    
        try {
          const id = Number(req.params.directorId);
          const movies = await Movie.findAll({
            where: { directorId: id},
            attributes: [ 'title', 'id', 'directorId'],
            include: {
                model: Director,
                attributes: ['name', 'email']
            }
          });
          res.send(movies);
        } catch (error) {
          serverError(error.message, res);
        }
       
    };

    getMovieById = async (req, res) => {

        try {
            const id = parseInt(req.params.id);
    
            const movie = await Movie.findByPk(id)
    
            if (!movie) return res.status(400).json({msg: 'Movie not found'});
    
            res.json(movie);
        } catch (error) {
            serverError(error.message, res);
        }
        
    };

    createMovie = async (req, res) => {

        try {
            const { title, genre, releaseYear, directorId } = req.body;
    
            if (!title || !genre || !directorId ) 
                return res.status(400).json({msg: 'All fields are required'});
    
            const movie = await Movie.create(req.body)
            
            res.status(201).json(movie);
        } catch (error) {
            serverError(error.message, res);
        }
    
        
    };

    update = async (req, res) => {

        try {
            const movieId = Number(req.params.movieId);
    
            const { genre, releaseYear, title} = req.body;
    
            // await Movie.update({
            //     title,
            //     genre,
            //     releaseYear
            // }, {
            //     where: { id: movieId },
            //     returning: true,
            // })

            const movie = await Movie.findOne({ where: { id: movieId}});
            
            if (!movie) return res.status(400).json({ msg: 'Movie not found'});

            movie.set({
                title,
                releaseYear,
                genre
            });

            await movie.save();

    
            res.status(200).json(movie);
           
        } catch (error) {
            serverError(error.message, res);
        }
    
    }

    delete = async (req, res) => {

        try {
            const movieId = Number(req.params.movieId);

            const movie = await Movie.findByPk(movieId);

            if (!movie) return res.status(400).json({ msg: 'Movie not found'});
    
            await Movie.destroy({
                where: { id: movieId},
            });

            
            res.json(movie);
        } catch (error) {
            serverError(error.message, res);
        }
    
    }
}

