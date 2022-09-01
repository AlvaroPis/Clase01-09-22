import express from 'express';
import {prueba} from './src';

const app = express();

app.post("/", (req, res) => {
  console.log(req)
  res.send(prueba('Hello World'));
 //prueba()
})

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`App listening on port: ${port}`))