import express from 'express';
import { Request, Response } from 'express';
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 3333

app.get("/ads", (_request: Request, response: Response) => {
    return response.status(200).json([
        { id: 1, name: 'Anúncio 1'},
        { id: 2, name: 'Anúncio 2'},
        { id: 3, name: 'Anúncio 3'},
        { id: 4, name: 'Anúncio 4'},
        { id: 5, name: 'Anúncio 5'},
    ]);
});

app.listen(PORT, () => console.log(`running on ${ PORT }`) )