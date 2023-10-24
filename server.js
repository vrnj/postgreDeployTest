const express = require('express');
const usersRouter = require('./routes/user.routes');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const post = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello');
});

app.use('/users', usersRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});