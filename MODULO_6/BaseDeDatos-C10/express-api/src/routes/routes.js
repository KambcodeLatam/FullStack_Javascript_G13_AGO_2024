import { Router } from 'express';
import movieRoutes from './movies.routes.js';
import directorRoutes from './directors.routes.js';

const router = Router();

router.use(movieRoutes);
router.use(directorRoutes);

export default router;