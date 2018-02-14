const express = require('express');
const BreweryDb = require('brewerydb-node');

const brewdb = new BreweryDb('08f7756465bc9ebecc995d7347fe895a');
const router = express.Router();

router.get('/', (req, res) => {
  res.format({
    html() {
      res.send('Developed with love, at <a href="http://alia.ml">ΛLIΛ<a>');
    },

    json() {
      // { Resolving CORS BreweryDB }
      brewdb.category.all((err, data) => {
        res.jsonp(data);
      });
    },
  });
});

module.exports = router;
