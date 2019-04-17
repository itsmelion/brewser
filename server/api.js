const express = require('express');
const BreweryDb = require('brewerydb-node');

const brewdb = new BreweryDb('08f7756465bc9ebecc995d7347fe895a');
const router = express.Router();


/*
  This is basicaly an "API Proxy"
  Resolving (CORS)[CrossOrigin] of BreweryDB
*/


// Beer Styles
router.get('/styles', (req, res) => {
  res.format({
    html() {
      res.send(`<h1>API for Beers Categories</h1><br>
      <p>Developed with love, at <a href="http://alia.ml">ΛLIΛ<a></p>`);
    },

    json() {
      brewdb.style.all((err, data) => res.jsonp(data));
    },
  });
});

/*
  Beer Style
*/

// By ID
router.get('/styles/:styleID', (req, res) => {
  res.format({
    html() {
      res.send(`<h1>API for Beers Styles by ID</h1><br>
                <p>Developed with love, at <a href="http://alia.ml">ΛLIΛ<a></p>`);
    },

    json() {
      brewdb.beer.find({ styleId: req.params.styleID }, (err, data) => {
        res.jsonp(data);
      });
    },
  });
});

/*
  Beers
*/
router.get('/beers', (req, res) => {
  res.format({
    html() {
      res.send(`<h1>API for Beers</h1><br>
                <p>Developed with love, at <a href="http://alia.ml">ΛLIΛ<a></p>`);
    },

    json() {
      // Cannot get full list of beers, so passing any param
      // that returns at least ONE ORGANIC BEER
      brewdb.search.beers({ q: 'Y' }, (err, data) => {
        res.jsonp(data);
      });
    },
  });
});

router.post('/beers', (req, res) => {
  res.format({
    json() {
      brewdb.beer.find(req.body, (err, data) => {
        res.jsonp(data);
      });
    },
  });
});

router.get('/beer/:ID', (req, res) => {
  res.format({
    html() {
      res.send(`<h1>API for Beer</h1><br>
                <p>Developed with love, at <a href="http://alia.ml">ΛLIΛ<a></p>`);
    },
    json() {
      brewdb.beer.getById(req.params.ID, {}, (err, data) => {
        res.jsonp(data);
      });
    },
  });
});

module.exports = router;
