const express = require('express');
const path = require('path');
const axios = require('axios');
const logger = require('./logger');

const app = express();
const PORT = 5000;
const URL = 'http://eng.svc:5001/eng1';
// const URL = 'http://eng.svc/eng1';

app.use(express.static(path.join(__dirname, 'static')));
app.use(logger) //probably this could be jwt auth, etc

// const home = (req, res) => res.send('hello from home');
const api = (req, res) => res.send('hello from api');
const eng = (req, res) => {
    axios.get(URL)
    .then(resp => res.send(resp.data))
    .catch(err => console.log(err));
};

// app.get('/', home);
app.get('/api', api);
app.get('/eng', eng);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
