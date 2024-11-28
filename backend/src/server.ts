import express, { Request, Response} from 'express';
import mainRouter from './routers/main';
import dotenv from 'dotenv';

const app = express();
const PORT = 3000;

app.use(express.json());

dotenv.config();

app.get('/', (req: Request, res: Response)=> {
    res.status(200).send('Welcome to API Petgram !');
});

app.use('/mainRoutes', mainRouter);

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})