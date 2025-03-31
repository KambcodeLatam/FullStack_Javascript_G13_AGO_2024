import { Router } from 'express';
import { DirectorController } from '../controllers/director.controller.js';

const router = Router();
const controller = new DirectorController();


router.get('/directors', controller.getDirectors);


router.get('/directors/:id/movies', controller.getMoviesByDirector);

router.post('/directors', controller.create);

router.get('/directors-movies-by-releaseYar/:releaseYear', controller.getMoviesByReleaseyear)



export default router;