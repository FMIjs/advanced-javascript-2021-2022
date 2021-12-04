const express = require('express');
const utils = require('./utils');
const app = express();

const apiRouter = require('./api');

app.use(express.static('public'));
app.use(express.json()); // middleware to parse application/json content-type requests
// the content will be added to the req.body object and we can easily use it

app.set('view engine', 'ejs');
app.set('layout', './layout');

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  utils.renderWithLayout(res, 'home', 'HOME', { results: { a: 1, b: 2 } });
});

app.get('/about', (req, res) => {
  utils.renderWithLayout(res, 'about', 'ABOUT US', { message: 'ABOUT US: sdas' });
});

app.listen(8080, () => {
  console.log('Server is listening on :8080');
});