import * as http from 'http';

import * as bodyparser from 'body-parser';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';

import { debugLog } from './utils/logger';
import { connectDB } from './config/database';

dotenv.config({ path: `${__dirname}/../.env` });
connectDB();

const app: express.Application = express();
const server: http.Server = http.createServer(app);

app.use(bodyparser.json());
app.use(cors());

server.listen(process.env.PORT, () => {
  debugLog(`Server running at http://localhost:${process.env.PORT}`);
});
