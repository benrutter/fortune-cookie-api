const express = require('express');
const apiRouter = express.Router();
const {connect, drop, disconnect, Fortune, randomFortune} = require('../db/db.js');

apiRouter.get('/', async (req, res, next) => {
  const fortune = await randomFortune();
  if (fortune) {
    res.send(fortune);
  } else {
    res.status(404).send();
  }
});

module.exports = apiRouter;
