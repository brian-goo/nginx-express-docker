const express = require('express');
const path = require('path');
const logger = require('./logger');

const app = express();
const PORT = 5000;

app.use(logger) //probably this could be jwt auth, etc
app.use(express.static(path.join(__dirname, 'static')));

// const home = (req, res) => res.send('hello from home');
const api = (req, res) => res.send('hello from api');

// app.get('/', home);
app.get('/api', api);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
