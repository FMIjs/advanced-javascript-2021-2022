import express from 'express';
import { connectApi } from './api';
import { connect } from './database/connect';
// import { models } from './database/models';
import cors from 'cors'
const app = express();

app.use(cors({
  origin: ['http://localhost:9000'],
  optionsSuccessStatus: 200
}));

connectApi(app);

app.get('/', (req, res) => {
  res.send('HELLO FROM BACKEND!');
});

connect()
  .then(() => {

    app.listen(8080, () => {
      console.log('Server is listening on :8080');
    });
  });
