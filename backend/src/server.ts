import express, { Request, Response} from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response)=> {
    console.log('Hello World');
});

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})