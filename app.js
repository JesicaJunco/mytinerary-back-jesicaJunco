import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRouter from './router/index.router.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(cors());
//req es el objeto solicitud
//res es el objeto respuesta
app.use('/api', indexRouter);

app.listen(PORT, () => console.log('Server running on port' + PORT));

