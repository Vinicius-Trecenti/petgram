import express, { Request, Response} from 'express';
import mainRouter from './routers/main';
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000', // Permitir o acesso do frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
}));

app.get('/', (req: Request, res: Response)=> {
    res.status(200).send('Welcome to API Petgram !');
});

app.use('/mainRoutes', mainRouter);

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})