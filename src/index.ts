import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import authRouter from './routes/authRouter';
import { errorHandlingMiddleware } from './middlewares/errorHandlerMiddleware';

const app = express();

app.use(express.json());

app.use(cors());

app.use(authRouter);

app.use(errorHandlingMiddleware);

const PORT = process.env.PORT || '5000';
const HOST = '127.0.0.1';

app.listen({ port: PORT, host: HOST},  () => {
    console.log(`Server is listening on port ${PORT}.`);
});