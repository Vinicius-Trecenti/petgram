import {Router} from 'express';
import { createUser } from '../controllers/user/userController';

export const router = Router();

    router.post('/userCreate', createUser);
