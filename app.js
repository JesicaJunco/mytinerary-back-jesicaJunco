import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(morgan('dev'));
//req es el objeto solicitud
//res es el objeto respuesta
app.get('/', (req, res)=> {
    res.send('Hello word')
})

app.get('/users', (req, res) =>{
    res.json({
        user: 'Jesica'
    });
})

app.listen(PORT, () => console.log('Server running on port' + PORT));

