import express from 'express';
import 'dotenv/config'
import cors from 'cors';

import Routes from './routes';

const app = express();
const PORT = process.env.PORT || 3333

app.use(express.json());
app.use(cors());
app.use(Routes);

app.listen(PORT, () => console.log(`running on ${ PORT }`) )