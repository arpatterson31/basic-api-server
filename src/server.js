'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const notFound = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');

app.use(express.json());
app.use(logger);

app.use('*', notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
      console.log(`Gurl we up on: ${port}`);
    });
  }
}