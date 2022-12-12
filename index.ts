import express, { json } from 'express';
import { UserRoute } from './4-routes/userRoute';
import cors from 'cors'
import * as path from 'path';

const server = express();

server.use(json());

server.use(cors())

// server.use('/', express.static(path.join(__dirname, 'public')));

server.use('/api', UserRoute);

server.listen(3000, () => {
    console.log('listening...');
})