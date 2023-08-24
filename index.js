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
    res.send(`Hi, this is my homepage ( ͡❛ ᴗ ͡❛)`);
})

//Requests books and converts to JSON format
app.get('/books', (req, res) => {
    res.json(BOOKS);
})

//Requests other pages with a placeholder address
app.get('/books/:id', (req, res) => {
    const { id } = req.params;
    //prints what is in the URL
    // console.log(req.params);
    // console.log(id);

    //define a variable to find id value in books json
    const book = BOOKS.find(book => book.id === id);
    //check if book id exists. if not, send 404 error
    if (!book) {
        res.status(404).send(`Sorry, I don't know what you're talking about  ¯\_( ͡❛ ᴗ ͡❛)_/¯`)
    }
    //if it does exist, show that book object    
    res.json(book)
})

// app.get find a specific title
app.get('/books/:title')


//app.get find a specific genre

app.listen(port, () => console.log(`Example app listening on port ${port}!`));