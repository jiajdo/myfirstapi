import express from 'express';
import cors from 'cors';
import path from 'path';
import BOOKS from 'books.js';

const app = express();
const port = 4000;

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
