'use strict'
// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const compression = require('compression');
const router = express.Router();
// Get our API routes
const api = require('./server/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(compression());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'server/routes/texts.json')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
router.get('*', (req, res) => {
  res.format({
    html: function () {
      res.sendFile(path.join(__dirname, 'dist/index.html'));
    },
    json: function () {
      file = {
        body: "this is index json response"
      }
      res.json(file);
    }
  })
});

// Error Pages
app.use((req, res, next) => {
  res.status(404).render('errors/404');
  next();
});

/* middleware que configura msgs de erro internos */
app.use((err, req, res, next) => {
  res.status(500).render('errors/500');
  next();
});


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '9200';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
