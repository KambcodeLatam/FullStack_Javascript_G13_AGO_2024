import { Router } from 'express';
import { MovieController } from '../controllers/movie.controller.js';

const router = Router();
const controller = new MovieController();


router.get('/movies', controller.getMovies);

router.get('/movies/:id', controller.getMovieById);

router.post('/movies', controller.createMovie);

router.put('/movies/:movieId', controller.update);

router.delete('/movies/:movieId', controller.delete);

export default router;