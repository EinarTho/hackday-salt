const getData = require('./fetcher');

const express = require('express');
const app = express();
const port = 3000;

var cors = require('cors');

app.use(cors());

app.get('/api/:year/:word', async (req, res) => {
  const year = parseInt(req.params.year);
  const query = req.params.word;
  console.log(year, query);
  const data = await getData(year, query).catch((e) => res.send(e.message));
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
