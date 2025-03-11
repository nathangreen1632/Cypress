import express, {Router} from 'express';
const router: Router = express.Router();
import {
  getRandomQuestions
} from '../../controllers/questionController.js';

router.route('/random').get(getRandomQuestions);

export default router;
