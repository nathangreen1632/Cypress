import express, {Router} from 'express';
const router: Router = express.Router();
import questionRoutes from './questionRoutes.js';

router.use('/questions', questionRoutes);

export default router;
