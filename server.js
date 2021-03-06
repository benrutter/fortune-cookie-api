const errorhandler = require('errorhandler');
const express = require('express');
const apiRouter = require('./api/api');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(errorhandler());

app.use('/cookie', apiRouter);

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});

module.exports = app;
