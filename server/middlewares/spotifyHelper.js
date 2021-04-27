const spotifyApi = require('../../helper/spotifyConnection');

module.exports = (req, res, next) => {
  spotifyApi.clientCredentialsGrant()
    .then((data) => {
      spotifyApi.setAccessToken(data.body.access_token);
      console.log('access granted!');
      next();
    })
    .catch((err) => {
      console.log(`error happened while app authentication ${err}`);
    });
};
