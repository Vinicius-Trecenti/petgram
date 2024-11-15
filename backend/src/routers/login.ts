import express, { Request, Response } from 'express';
import loginWithEmail from '../controllers/login';

const router = express.Router();

router.post('/loginEmail', (req: Request, res: Response) => {
    loginWithEmail(req, res);
});

export default router;