import express, { Request, Response } from 'express';
import { createUser } from '../controllers/user/userController';

const router = express.Router();

    router.post('/userCreate', (req: Request, res: Response) => {
        createUser(req, res);
    });

export default router