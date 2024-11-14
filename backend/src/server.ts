import express, { Request, Response} from 'express';
import router from './routers/userRouter';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response)=> {
    res.status(200).send('Welcome to API Petgram !');
});

app.use('/user', router)

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})