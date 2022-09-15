import express from 'express';
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 3333

app.get("/", (request, response) => {
    return response.status(200).json({ message: 'Running'});
});

app.listen(PORT, () => console.log(`running on ${ PORT }`) )