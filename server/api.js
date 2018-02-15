const express = require('express');
const BreweryDb = require('brewerydb-node');

const brewdb = new BreweryDb('08f7756465bc9ebecc995d7347fe895a');
const router = express.Router();


/*
  This is basicaly an "API Proxy"
  Resolving (CORS)[CrossOrigin] of BreweryDB
*/


// Beer Styles (category)
router.get('/styles', (req, res) => {
  res.format({
    html() {
      res.send(`<h1>API for Beers Categories</h1><br>
      <p>Developed with love, at <a href="http://alia.ml">ΛLIΛ<a></p>`);
    },

    json() {
      brewdb.style.all((err, data) => {
        res.jsonp(data);
      });
    },
  });
});

// Beer Style
router.get('/styles/:styleID', (req, res) => {
  const decodeParam = decodeURI(req.params.styleID);
  res.format({
    html() {
      res.send(`<h1>API for Beer Category: ${decodeParam}</h1><br>
                <p>Developed with love, at <a href="http://alia.ml">ΛLIΛ<a></p>`);
    },

    json() {
      brewdb.style.getById(req.params.styleID, (err, data) => {
        res.jsonp(data);
      });
      // brewdb.search.all({ q: decodeParam, type: 'beer' }, (err, data) => {
      //   res.jsonp(data);
      // });
    },
  });
});

// Beers
router.get('/beers', (req, res) => {
  res.format({
    html() {
      res.send(`<h1>API for Beers</h1><br>
                <p>Developed with love, at <a href="http://alia.ml">ΛLIΛ<a></p>`);
    },

    json() {
      brewdb.search.beers({ q: '%20' }, (err, data) => {
        res.jsonp(data);
      });

      // or

      // brewdb.search.all({ q: '%20', type: 'beer' }, (err, data) => {
      //   res.jsonp(data);
      // });
    },
  });
});

router.get('/beers/:param', (req, res) => {
  res.format({
    html() {
      res.send(`<h1>API for Beers</h1><br>
                <p>Developed with love, at <a href="http://alia.ml">ΛLIΛ<a></p>`);
    },

    json() {
      brewdb.search.beers({ q: req.params.param }, (err, data) => {
        res.jsonp(data);
      });

      // or

      // brewdb.search.all({ q: '%20', type: 'beer' }, (err, data) => {
      //   res.jsonp(data);
      // });
    },
  });
});

module.exports = router;
