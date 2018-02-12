const express = require('express');
const BreweryDb = require('brewerydb-node');

const router = express.Router();
const brewdb = new BreweryDb(process.env.apiKey);

router.get('/', (req, res) => {

  const myCallback = function myCallback(err, data) {
    if (err) throw err;
    return data;
  };

  res.format({
    html: function () {
      res.send('Developed with love, at <a href="http://alia.ml">ΛLIΛ<a>');
    },

    json: function () {
      // { Resolving CORS BreweryDB }
      res.jsonp(brewdb.style.all(myCallback));
    }
  })

});

module.exports = router;
