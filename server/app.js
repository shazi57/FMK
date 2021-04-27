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

const server = app.listen(process.env.PORT || 5000);

process.on('SIGINT', () => {
  //  cleanup when server is closed
  server.close(() => {
    console.log('closing server...');
    process.exit();
  });
});
