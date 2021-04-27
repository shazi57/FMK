const express = require('express');
const spotifyApi = require('../helper/spotifyConnection');
const spotifyAuthenticationMiddleware = require('./middlewares/spotifyHelper');

const app = express();

app.use(express.static('public'));

app.use(spotifyAuthenticationMiddleware);

app.get('/search', (req, res) => {
  const { confirmedTerm } = req.query;
  spotifyApi.searchTracks(confirmedTerm)
    .then((data) => {
      res.send(data.body);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(process.env.PORT || 5000);
