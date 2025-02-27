// auth.router.js

import express from 'express';
import { signin, signup, insertdata,signina1,signupa1} from '../controllers/auth.controller.js';
import generateQR from './generateQR.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/insertdata', insertdata);
// router.post('/insertdata1', insertdata1);
router.post('/signina1',signina1)
router.post('/signupa1',signupa1)


// Include the generateQR router
router.use('/generateQR', generateQR);

export default router;
