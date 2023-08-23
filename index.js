import express from 'express';
import cors from 'cors';
import path from 'path';
import BOOKS from './books.js';
import 'dotenv/config'  

const app = express();
const port = 4000;
const ILOVE = process.env.I_LOVE;
console.log('I love', ILOVE)

//Middleware
app.use(cors());

//Equivalent to pwd. Informs server of file paths
const _dirname = path.resolve();

//Request for the homepage
app.get('/', (req, res) => {
    res.send('Hi, this is my homepage');
})

//Requests books and converts to JSON format
app.get('/books', (req, res) => {
    res.json(BOOKS);
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));