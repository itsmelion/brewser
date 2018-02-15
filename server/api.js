const express = require('express');
const BreweryDb = require('brewerydb-node');

const brewdb = new BreweryDb('08f7756465bc9ebecc995d7347fe895a');
const router = express.Router();


/*
  This is basicaly an "API Proxy"
  Resolving (CORS)[CrossOrigin] of BreweryDB
*/


// Beer Styles (category)
router.get('/', (req, res) => {
  res.format({
    html() {
      res.send(`<h1>API for Beers Categories</h1><br>
      <p>Developed with love, at <a href="http://alia.ml">ΛLIΛ<a></p>`);
    },

    json() {
      brewdb.category.all((err, data) => {
        res.jsonp(data);
      });
    },
  });
});

// Beer Style (category)
// DOUBT: I could not find a propper endpoint to make this Query, so i tried search.
router.get('/beers/:category', (req, res) => {
  const decodeParam = decodeURI(req.params.category);
  res.format({
    html() {
      res.send(`<h1>API for Beer Category: ${decodeParam}</h1><br>
                <p>Developed with love, at <a href="http://alia.ml">ΛLIΛ<a></p>`);
    },

    json() {
      brewdb.search.all({ q: decodeParam, type: 'beer' }, (err, data) => {
        res.jsonp(data);
      });
    },
  });
});

module.exports = router;
